import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder().setName('user').setDescription('Provides information about the user.');
export async function execute(interaction) {
    await interaction.reply(
        `This command was run by ${interaction.member.user.globalName}.`
    );
}