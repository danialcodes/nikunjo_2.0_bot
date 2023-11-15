const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactor')
        .setDescription('Replies with reactions!'),
    async execute(interaction, client) {
        const message = await interaction.reply({
            content: 'React to me!',
            fetchReply: true
        })
        // const emoji = '👍'

        // const emoji = message.guild.emojis.cache.find(emoji => emoji.id === '1173195038914781254')
        // message.react('1173195038914781254')

        // const filter = (reaction, user) => {
        //     return reaction.emoji.id === '1173195038914781254' && user.id === interaction.user.id;
        // };

        // const collector = message.createReactionCollector({ filter, time: 5000 });

        // collector.on('collect', (reaction, user) => {
        //     console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        // });

        // collector.on('end', collected => {
        //     console.log(`Collected ${collected.size} items`);
        // });

        // message.react('🍎')
        //     .then(() => message.react('🍊'))
        //     .then(() => message.react('🍇'))
        //     .catch(error => console.error('One of the emojis failed to react:', error));
        // message.reactions.removeAll()
        //     .catch(error => console.error('Failed to clear reactions:', error));

        message.react('👍').then(() => message.react('👎'));

        const collectorFilter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === interaction.user.id;
        };

        
        // const collector = message.createReactionCollector({ filter: collectorFilter, time: 15000 });
        
        // collector.on('collect', (reaction, user) => {
        //     console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
        // });
        
        // collector.on('end', collected => {
        //     console.log(`Collected ${collected.size} items`);
        // });

        message.awaitReactions({ filter: collectorFilter, max: 1, time: 20000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === '👍') {
                    message.reply('You reacted with a thumbs up.');
                } else {
                    message.reply('You reacted with a thumbs down.');
                }
            })
            .catch(collected => {
                message.reply('You reacted with neither a thumbs up, nor a thumbs down.');
            });
    }
}