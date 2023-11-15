const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('Replies with modal!'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId('fav-color')
            .setTitle('Favorite Color?')

        const inputs = [
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('favoriteColorInput')
                        .setLabel('What is your Favorite Color?')
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short))
            ,
            new ActionRowBuilder()
                .addComponents(
                    new TextInputBuilder()
                        .setCustomId('name')
                        .setLabel('What is your name?')
                        .setRequired(true)
                        .setStyle(TextInputStyle.Short))
        ]

        modal.addComponents(inputs);

        await interaction.showModal(modal)
    }
}