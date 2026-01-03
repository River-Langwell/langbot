const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('info')
	.setDescription('Get info about a user or a server!')
	.addSubcommand((subcommand) =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption((option) => option.setName('target').setDescription('The user')),
	)
	.addSubcommand((subcommand) => subcommand.setName('server').setDescription('Info about the server'));



    
if (interaction.commandName === 'create') {
    switch (interaction.options.data[0].name) {
        case "all": {
            await interaction.reply(`Building ${interaction.commandName} ${interaction.options.data[0].name}...`);

            createRole();
            createCategory();
            createChannelSet();

            await interaction.followUp(`action has completed.`);
        }
        case "channel": {
            await interaction.reply(`Building ${interaction.commandName} ${interaction.options.data[0].name}...`);
            const channelManager = interaction.guild?.channels;
            createChannel();
            await interaction.followUp('has completed.');
        }
        case "role": {
            await interaction.reply(`Building ${interaction.commandName} ${interaction.options.data[0].name}...`);
            createRole();
            await interaction.followUp('has completed.');
        }
        case 'category': {

            await interaction.reply(`Doing the thing...`);
            createCategory();
            await interaction.followUp('has completed.');
        }
        default: { }
    }
}