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

        while (true) {
            const fetchedMessages = await channel.messages.fetch({ limit: 1, before: interaction.id });
            let array = [...fetchedMessages];
            for (var m = 0; m < array.length; m++) {
                if (array[m].deletable) { array[m].delete(); }
            }

        }
    }

    catch (error) { console.log("I AM STUCK AT LINE 44!" + error.message) }
}

async function messageDelete(message) {
    await message.delete();
}