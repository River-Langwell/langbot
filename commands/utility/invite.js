import { SlashCommandBuilder } from 'discord.js';
import config from '/home/langbot_user/langbot/config.json' with {type: 'json'};

const applicationId = config.clientId;
export const data = new SlashCommandBuilder().setName('invite').setDescription('Replies with a bot invite');
export async function execute(interaction) {
    await interaction.reply(`https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands`);
}
