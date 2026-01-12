import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('purge')
    .setDescription('purge all messages from the selected channel(s).')
    .addChannelOption((option) => option.setName('channel').setDescription('The channel to purge all messages from; if no channel is selected, purging from default(s).'))

export async function execute(interaction) {
    await interaction.reply('Beginning purge.');

    try {

        const client = interaction.client;

        console.log(interaction.guildId);

        const guild = await client.guilds.fetch(interaction.guildId);


        console.log(guild.name);

        const channels = guild.channels.fetch();

        channels.forEach(c => {
            console.log(c.name);
        })
        // console.log()



    }
    catch (error) { console.log(error) }

    await interaction.followUp({
        content: interaction.options.getChannel('channel').name
    });
}