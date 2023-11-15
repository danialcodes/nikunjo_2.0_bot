const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('permission')
        .setDescription('This command requires permission!')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('The member to ban')
                .setRequired(true))
        .setDefaultMemberPermissions(0),
    async execute(interaction, client) {
        const { roles } = interaction.member;
        const role = await interaction.guild.roles.fetch('1173226367098310788').catch(console.error);

        const testRole = await interaction.guild.roles.create({
            name: 'Test Role',
            permissions: [PermissionsBitField.Flags.KickMembers]
        }).catch(console.error);

        if (roles.cache.has('1173226367098310788')) {
            await interaction.deferReply({
                fetchReply: true
            })
            await roles.remove(role).catch(console.error);

            await interaction.editReply({
                content: `Removed ${role.name} role from ${interaction.user.username}`
            })
        } else {
            await interaction.reply({
                content: `You don't have ${role.name} role`
            })
        }

        await roles.add(testRole).catch(console.error);
        await testRole
            .setPermissions([PermissionsBitField.Flags.BanMembers])
            .catch(console.error);

        const channel = await interaction.guild.channels.create({
            name: 'test-channel',
            permissions: [{
                id: interaction.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel]
            }, {
                id: testRole.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
            }]
        });
        await channel.permissionOverwrites
            .edit(testRole.id, { SendMessages: false })
            .catch(console.error);
    }
}