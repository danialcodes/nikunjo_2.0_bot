module.exports = {
    data: {
        name: "sub-menu",
    },
    async execute(interaction, client) {
        console.log(interaction.values)
        await interaction.reply({
            content: `You select \n${
                interaction.values.map(value => `\n\`${value}\``).join(", ")
            }`,
            ephemeral: true
        })
    }
}