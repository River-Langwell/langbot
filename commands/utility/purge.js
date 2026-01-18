import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';


export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the selected channel(s).')
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to purge all messages from; if no channel is selected, purging from default(s).'))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels | PermissionFlagsBits.ManageMessages);

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
            let fetchedMessages = await channel.messages.fetch({ limit: 100, before: interaction.id });

            if (fetchedMessages.size === 0) { break; }

            let data = [...fetchedMessages];

            for (let i = 0; i < data.length; i++) {
                console.log("purging message id " + data[i][1].id);
                await channel.messages.delete(data[i][1].id);
            }
        }
    }

    catch (error) { console.log("I AM STUCK AT LINE 44!" + error.message) }

    await interaction.editReply('purge complete.');
}