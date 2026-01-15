import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, SeparatorBuilder, SeparatorSpacingSize, TextDisplayBuilder } from "discord.js";


export const welcome = new ContainerBuilder()
    .addTextDisplayComponents(
        new TextDisplayBuilder().setContent("## Welcome!")
    )
    .addTextDisplayComponents(
        new TextDisplayBuilder().setContent("Please select your language!")
    )
    .addSeparatorComponents(
        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true)
    )
    .addActionRowComponents(
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setStyle(ButtonStyle.Primary)
            .setLabel("Label1")
            .setCustomId("button1_label1")
        )
    );