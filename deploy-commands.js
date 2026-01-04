import { REST, Routes } from 'discord.js';
import config from import.meta.dirname +'/config.json' with {type: "json"};
import fs from 'node:fs';
import path from 'node:path';


const clientId = config.clientId;
const guildId = config.guildId;
const token = config.token;
const discord_baseurl = config.discord_baseurl;

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join('/home/langbot_user/langbot/', 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    console.log(commandsPath);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));
    
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        //console.log(filePath);

        const command = await import(filePath);
        //console.log(command);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
            console.log(`[SUCCESS] The command at ${filePath} has been pushed to array commands.`);
        } else {

            console.log(`[WARNING] The command at ${filePath} is missing a required "data" property.`);
            console.log(`[WARNING] The command at ${filePath} is missing a required "execute" property.`);
        }
    }
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

console.log(token);
console.log(clientId);

// and deploy your commands!
(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild (guildId) with the current set
        //const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

        //Uncomment below (and comment above) for global command deployment
        const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();