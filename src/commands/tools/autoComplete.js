const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('autocomplete')
        .setDescription('Replies autocomplete!')
        .addStringOption(option =>
            option.setName('colour')
                .setDescription('Your favourite colour')
                .setAutocomplete(true)
        ),
    async autocomplete(interaction, client) {
        const focusedValue = interaction.options.getFocused();
        const choices = ['red', 'blue', 'yellow', 'green', 'purple', 'black', 'white', 'orange', 'pink', 'brown'];
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        await interaction.respond(
            filtered.map(choice => ({ name: choice, value: choice })),
        );
    },
    async execute(interaction, client) {
        const options = interaction.options.getString('colour');
        await interaction.reply({
            content: `Your favourite colour is ${options}`
        })
    }
}