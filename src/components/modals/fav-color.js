module.exports = {
    data: {
        name: "fav-color",
    },
    async execute(interaction, client) {
        console.log(interaction.fields)
        await interaction.reply({
            content: `${interaction.fields.getTextInputValue('name')} Your favorite color is ${interaction.fields.getTextInputValue('favoriteColorInput')}`,
            ephemeral: true
        })
    }
}