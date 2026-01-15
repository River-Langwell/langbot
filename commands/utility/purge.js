import { SlashCommandBuilder } from 'discord.js';


export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the selected channel(s).')
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to purge all messages from; if no channel is selected, purging from default(s).'))

export async function execute(interaction) {
    await interaction.reply('Beginning purge.');

    try {

        const client = interaction.client;

        //console.log(interaction.guildId);

        const guild = await client.guilds.fetch(interaction.guildId);

        console.log(guild.name);

        const channel = await client.channels.fetch(interaction.channelId);
        console.log(channel.name);

        purgeMessages(channel);

        //const allChannels = await guild.channels.fetch();

        //allChannels.forEach(channel => { console.log(channel.name); })

        // console.log()

    }
    catch (error) { console.log(error) }

    await interaction.followUp({
        content: interaction.channelId
    });
}


async function purgeMessages(channel) {

    let iterate = 0;

    while (true) {
        const fetchedMessages = await channel.messages.fetch({ limit: 100 });

        if (fetchedMessages.size === 0) {
            break;
        }

        fetchedMessages.forEach(message => {
            message.delete();
            iterate++;
        });
    }
}