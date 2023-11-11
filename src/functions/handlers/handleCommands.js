const fs = require("fs")

module.exports = (client) => {
    const commandFolders = fs.readdirSync(`./src/commands`).filter((file)=>file.endsWith(".js"));

    client.handleCommands = async () => {
        for (const folder of commandFolders) {
            
            const functionFiles = fs
                .readdirSync(`./src/functions/${folder}`)
                .filter((file) => file.endsWith('js'))

            for (const file of functionFiles) {
                require(`./functions/${folder}/${file}`)(client)
            }
        }

    }
}