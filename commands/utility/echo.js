import { ActivityFlagsBitField, MessageFlags, MessageFlagsBitField, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption((option) => option.setName('input').setDescription('The input to echo back'))//.setRequired(true)
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to echo into'))
    .addBooleanOption((option) => option.setName('ephemeral').setDescription('Whether or not the echo should be ephemeral')
    );
export async function execute(interaction) {
    const echo = interaction.options.getString('input');
    const channel = interaction.options.getChannel('channel');
    const ephemChoice = interaction.options.getBoolean('ephemeral');

    var isEphemeral = new MessageFlagsBitField();
    if (ephemChoice) { isEphemeral.bitfield = 64; }

    if (channel != interaction.channel) {
        await interaction.reply({
            content: `Message ${echo} is sent in channel ${channel.name}`
        });
    }
    else {
        await interaction.reply({
            content: echo,
            flags: isEphemeral
        });
    }


}