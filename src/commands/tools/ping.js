const { SlashCommandBuilder } = require('discord.js');
module.exports={
    data : new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with ping!'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });
        const newMessage = `API Latency: ${Math.round(client.ws.ping)}ms\nClient Latency: ${message.createdTimestamp - interaction.createdTimestamp}ms`;
        await interaction.editReply({
            content: newMessage,
            ephemeral: true
        })
    }
}