const guild = require('../../schemas/guild');
const Guild = require('../../schemas/guild')

const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('database')
        .setDescription('Returns information from database'),
    async execute(interaction, client) {
        let guildProfile = await Guild.findOne({ guildId: interaction.guild.id })
        if (!guildProfile) {
            guildProfile = await Guild.create({
                guildId: interaction.guild.id,
                guildName: interaction.guild.name,
                guildIcon: interaction.guild.iconURL() ? interaction.guild.iconURL() : null
            }).catch(console.error)

            await interaction.reply({
                content: `Server Name: ${guildProfile.guildName}\nServer Icon: ${guildProfile.guildIcon}\nServer ID: ${guildProfile.guildId}`,
                ephemeral: true
            })
            console.log(guildProfile);

        }
    }
}