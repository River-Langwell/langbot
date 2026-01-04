import { SlashCommandBuilder } from 'discord.js';
import { applicationId } from './config.json';

export const exports = {
    data: new SlashCommandBuilder().setName('invite').setDescription('Replies with a bot invite'),
    async execute(interaction) {
        await interaction.reply(`https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands`);
    }
}