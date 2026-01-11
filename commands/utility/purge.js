import { Guild, GuildChannelManager, ChannelManager, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the selected channel(s).')
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to purge all messages from; if no channel is selected, purging from default(s).'))

export async function execute(interaction) {
    await interaction.reply('Beginning purge.');

    try {
        const guildId = interaction.guildId;
        const guild = Guild.fetch(guildId);

        var channel = new ChannelManager();

        const givenChannel = interaction.options.getChannel('channel');
        if (givenChannel != null) {

        }


        const ChanManager = new GuildChannelManager(guildId);

        var channelList = [];
        if (channel != undefined) { channelList.push(channel); }

    }
    catch (error) { }
    await interaction.followUp('');
}