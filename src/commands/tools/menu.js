const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Replies with menu!'),
    async execute(interaction, client) {


        const menuOptions = [
            new StringSelectMenuOptionBuilder({
                label: 'Option 1',
                value: 'option_1',
                description: 'This is option 1'
            }),
            new StringSelectMenuOptionBuilder({
                label: 'Option 2',
                value: 'option_2',
                description: 'This is option 2'
            }),
        ]


        const menu = new StringSelectMenuBuilder()
            .setCustomId('sub-menu')
            .setMinValues(1)
            .setMaxValues(2)
            .setOptions(menuOptions)
            .setPlaceholder('Select an option!');

        const row = new ActionRowBuilder()
            .addComponents(menu);
        await interaction.reply({
            content: `Select an option!`,
            components: [row],
            ephemeral: true
        });

    }
}