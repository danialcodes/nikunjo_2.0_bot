require('dotenv').config()

const {Client,Collection,GatewayIntentBits} = require("discord.js")
const fs = require("fs")

const client = new Client({intents:GatewayIntentBits.Guilds})
client.commands = new Collection()

const functionFolders = fs.readdirSync(`./src/functionsconst functionFolders = fs.readdirSync(`./src/functions`);
`);

for (const folder of functionFolders){
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file)=> file.endsWith('js'))

    for (const file of functionFiles){
        require(`./functions/${folder}/${file}`)(client)
    } 
}

client.login(process.env.BOT_TOKEN)