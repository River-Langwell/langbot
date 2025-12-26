import { DISCORD_BASE_URL } from './constants.ts';

export async function InstallGlobalCommands(appId, commands) {
    //API endpoint to overwrite global commands
    const endpoint = `applications/${appId}/commands`;
    try {
        await DiscordRequest(endpoint, { method: 'PUT', body: commands });
    } catch (err) { console.error(err); }
}

export async function DiscordRequest(endpoint: string, options) {
    const url = DISCORD_BASE_URL + endpoint;
    if (options.body) options.body = JSON.stringify(options.body);

    const res = await fetch(url, {
        headers: {
            Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
            'Content-Type': 'application/json; charset=UTF-8',
            'User-Agent': 'DiscordBot'
        },
        ...options
    });

    if (!res.ok) {
        const data = await res.json();
        console.log(res.status);
        throw new Error(JSON.stringify(data));
    }
    return res;
}

