import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';


export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the current channel.')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels | PermissionFlagsBits.ManageMessages);

export async function execute(interaction) {

    await interaction.reply('Beginning purge.');
    try {
        
        const client = interaction.client;
        const channel = await client.channels.fetch(interaction.channelId);

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