import { Guild } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the server.');

export async function execute(interaction) {
    await interaction.reply('Beginning purge.');

    try {
        const guildId = interaction.guildId;
        const guild = Guild.fetch(guildId);

    }
    catch (error) { }
    await interaction.followUp('');
}