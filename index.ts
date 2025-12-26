import 'dotenv/config';
import 'discord.js';

import { Client, Events, GatewayIntentBits, ModalSubmitInteraction, RoleManager } from 'discord.js';

import { langModal1 } from './src/langModal.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});


client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) { return; }

    if (interaction.commandName.toLowerCase() === 'ping') {
        await interaction.reply('First reply --');
        await interaction.followUp('Pong!');
    }
    if (interaction.commandName === 'invite') {
        await interaction.reply(`https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_APPLICATION_ID}&scope=applications.commands`);
    }
    if (interaction.commandName === 'create') {
        switch (interaction.options.data[0].name) {
            case "channel": {
                await interaction.reply(`Building ${interaction.commandName} ${interaction.options.data[0].name}...`);
                const channelManager = interaction.guild?.channels;
                await interaction.followUp('has completed.');
            }
            case "role": {
                await interaction.reply(`Building ${interaction.commandName} ${interaction.options.data[0].name}...`);
                await interaction.followUp('has completed.');
            }
            case 'language': {
                await interaction.showModal(langModal1);
                languageModal();
            }
            default: { }
        }
    }
});

client.login(process.env.DISCORD_TOKEN);

function languageModal() {
    client.addListener(Events.InteractionCreate, async minteraction => {
        if (!minteraction.isModalSubmit()) { return; }
        if (minteraction.isModalSubmit()) {
            if (minteraction.customId === langModal1.data.custom_id) {
                const language = minteraction.fields.getTextInputValue('native_language');
                const engLang = minteraction.fields.getTextInputValue('english_language');

                //await minteraction.reply({ content: `Language ${language} (${engLang}) has been configured successfully.` });
            }
        }
    });
}

