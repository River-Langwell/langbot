import { SlashCommandBuilder } from 'discord.js';
import config from '/home/langbot_user/langbot/config.json' with {type: 'json'};

const applicationId = config.clientId;
export const data = new SlashCommandBuilder().setName('invite').setDescription('Replies with a bot invite');
export async function execute(interaction) {
    await interaction.reply(`[invite me!] (https://discord.com/oauth2/authorize?client_id=1359707022638972994&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Foauth2%2Fauthorize%3Fclient_id%3D1359707022638972994%26permissions%3D2147485696%26integration_type%3D0%26scope%3Dbot&integration_type=0&scope=applications.commands.permissions.update+bot)`);

    //https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands
}
