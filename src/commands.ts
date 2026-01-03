import 'dotenv/config';
import { ApplicationCommand, REST, Routes, SlashCommandBuilder } from 'discord.js';


const BUILD = new SlashCommandBuilder()
    .setName('create')
    .setDescription('create as selected')
    .addSubcommand(subcommand =>
        subcommand
            .setName('channel')
            .setDescription('create a new channel'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('role')
            .setDescription('create a new role'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('language')
            .setDescription('create a new language option'))
    .addSubcommand(subcommand =>
        subcommand
            .setName('category')
            .setDescription('create a new (language) category')
    );

    

export const ADD_LANGUAGE = {
    name: 'add_language',
    description: "adds a language section",
    type: 1
}

export const MODIFY = {
    name: 'mod',
    description: 'Replies with modify!',
    type: 1
}

export const INVITE = {
    name: 'invite',
    description: 'Replies with a bot invite!',
    type: 1,
}

export const PING = {
    name: 'ping',
    description: 'Replies with pong!',
    type: 1
};

const ALL_COMMANDS = [BUILD, MODIFY, INVITE, PING, ADD_LANGUAGE];



const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN!);

try {
    console.log('Started refeshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID!), { body: ALL_COMMANDS });
    console.log('Successfully reloaded application (/) commands.');
} catch (err) { console.error(err); }

