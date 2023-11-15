const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Returns a button!'),
    async execute(interaction, client) {
        const button = new ButtonBuilder()
            .setCustomId('sub-yt')
            .setLabel('Subscribe')
            .setStyle(ButtonStyle.Success)
        const linkBtn = new ButtonBuilder()
            .setURL('https://www.youtube.com/channel/UCc7rOcwsC5Vg5bTOw8v5jGQ')
            .setLabel('Confirm Ban')
            .setStyle(ButtonStyle.Link);
        const row = new ActionRowBuilder()
            .addComponents(button,linkBtn);
        await interaction.reply({
            content: `Subscribe to my YouTube channel!`,
            components: [row],
            ephemeral: true
        });
    }
}