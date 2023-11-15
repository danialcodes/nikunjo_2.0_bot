module.exports = {
    data: {
        name: "sub-yt",
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: "https://www.youtube.com/channel/UCc7rOcwsC5Vg5bTOw8v5jGQ",
            ephemeral: true
        })
    }
}