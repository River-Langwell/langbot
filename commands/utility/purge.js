import { Guild, GuildChannelManager, ChannelManager, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the selected channel(s).')
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to purge all messages from; if no channel is selected, purging from default(s).'))

export async function execute(interaction) {
    await interaction.reply('Beginning purge.');

    try {

        console.log(interaction.guildId);
        console.log()
        const guildId = interaction.guildId;
        const guild = new Guild.fetch(guildId);

        var channel = new ChannelManager();

        var response = "";

        console.log(interaction.options.getChannel('channel').name);

        guild

        if (givenChannel != null) {

            response = givenChannel.channelId;
        }


        const ChanManager = new GuildChannelManager(guildId);

        var channelList = [];
        if (channel != undefined) { channelList.push(channel); }

    }
    catch (error) { console.log(error) }

    await interaction.followUp({
        content: interaction.options.getChannel('channel').name
    });
}