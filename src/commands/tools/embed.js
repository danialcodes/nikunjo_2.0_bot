const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Replies an Embed!'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is an embed!`)
            .setDescription("This is a embed description!")
            .setColor(0x00ff00)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://www.facebook.com/danialcodes`,
                name: interaction.user.tag,
                icon_url: interaction.user.displayAvatarURL()
            })
            .setFooter({
                text: `This is a footer!`,
                icon_url: client.user.displayAvatarURL()
            })
            .setURL(`https://www.github.com/danialcodes`)
            .addFields([
                {
                    name: `Field 1`,
                    value: `This is field 1`,
                    inline: true
                },
                {
                    name: `Field 2`,
                    value: `This is field 2`
                }
            ])

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        })
    }
}