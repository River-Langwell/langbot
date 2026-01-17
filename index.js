import fs from 'node:fs';
import path from 'node:path';
import { Client, Collection, GatewayIntentBits } from 'discord.js';

import pkg from 'discord.js';
const { GatewayIntentBits } = pkg;
import { LanguageLibrary, languageEntry } from './src/languageReader.js';
import config from './config.json' with {type: 'json'};

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

const clientId = config.clientId;
const guildId = config.guildId;
const token = config.token;
const discord_baseurl = config.discord_baseurl;


const langLibrary = new LanguageLibrary();

langLibrary.map.forEach(langLib => {
	//console.log(langLib.language_en);
})

client.commands = new Collection();
const foldersPath = path.join('/home/langbot_user/langbot/', 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = await import(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join('/home/langbot_user/langbot/', 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = await import(filePath);
	if (event.once) {
		try { client.once(event.name, (...args) => event.execute(...args)); }
		catch (error) { console.log("this is all okay."); }
	} else {
		try { client.on(event.name, (...args) => event.execute(...args)); }
		catch (error) { console.log("This is fine."); }
	}
}

client.login(token);