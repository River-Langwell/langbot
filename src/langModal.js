import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from '@discordjs/builders';

const langModal1 = new ModalBuilder()
    .setCustomId('add_language_modal_screen1')
    .setTitle('Add a language option');
const langModal2 = new ModalBuilder()
    .setCustomId('add_language_modal_screen2')
    .setTitle('Add a language option');
const langModal3 = new ModalBuilder()
    .setCustomId('add_language_modal_screen3')
    .setTitle('Add a language option');


const native_language = new TextInputBuilder()
    .setCustomId('native_language')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(100)
    .setPlaceholder('Enter the name of the language in its own language (e.g., Spanish = español)')
    .setRequired(true);
const english_language = new TextInputBuilder()
    .setCustomId('english_language')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(100)
    .setPlaceholder('Enter the name of the language in its own language (e.g., Spanish = Spanish)')
    .setRequired(true);
const two_letter_abbr = new TextInputBuilder()
    .setCustomId('two_letter_code')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(5)
    .setPlaceholder('Enter the two (or three) letter code for the language.  Refer to ISO 639')
    .setRequired(true);
const i_speak_language = new TextInputBuilder()
    .setCustomId('i_speak_language')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"I speak [language]\"")
    .setRequired(true);


const general_translation = new TextInputBuilder()
    .setCustomId('general_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"general\"")
    .setRequired(false);
const expedition_chat_translation = new TextInputBuilder()
    .setCustomId('expedition_chat_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"Expedition Chat\"")
    .setRequired(false);
const agreement_terms_translation = new TextInputBuilder()
    .setCustomId('agreement_terms_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"Agreement Terms\"")
    .setRequired(false);


const north_translation = new TextInputBuilder()
    .setCustomId('north_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"North\"")
    .setRequired(false);
const south_translation = new TextInputBuilder()
    .setCustomId('south_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"South\"")
    .setRequired(false);
const east_translation = new TextInputBuilder()
    .setCustomId('east_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"East\"")
    .setRequired(false);
const west_translation = new TextInputBuilder()
    .setCustomId('west_translation')
    .setStyle(1)
    .setMinLength(1)
    .setMaxLength(200)
    .setPlaceholder("Enter the translation of \"West\"")
    .setRequired(false);

const nativeActRow = new ActionRowBuilder().addComponents(native_language);
const englishActRow = new ActionRowBuilder().addComponents(english_language);
const two_letterActRow = new ActionRowBuilder().addComponents(two_letter_abbr);
const i_speakActRow = new ActionRowBuilder().addComponents(i_speak_language);

const generalActRow = new ActionRowBuilder().addComponents(general_translation);
const expoChatActRow = new ActionRowBuilder().addComponents(expedition_chat_translation);
const agreementActRow = new ActionRowBuilder().addComponents(agreement_terms_translation);

const northActRow = new ActionRowBuilder().addComponents(north_translation);
const southActRow = new ActionRowBuilder().addComponents(south_translation);
const eastActRow = new ActionRowBuilder().addComponents(east_translation);
const westActRow = new ActionRowBuilder().addComponents(west_translation);

langModal1.addComponents(nativeActRow, englishActRow, two_letterActRow, i_speakActRow,);
langModal2.addComponents(generalActRow, expoChatActRow, agreementActRow);
langModal3.addComponents(northActRow, southActRow, eastActRow, westActRow);

export { langModal1 };