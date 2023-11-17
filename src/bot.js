require('dotenv').config()
const {BOT_TOKEN,DATABASE_URI} = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js")
const {connect} = require("mongoose")
const fs = require("fs")

const {Guilds,GuildMessages,GuildMessageReactions} = GatewayIntentBits

const client = new Client({ intents: [Guilds,GuildMessages,GuildMessageReactions] })
// const client = new Client({ intents: 32767 })

client.commands = new Collection()
client.buttons = new Collection()
client.selectMenus = new Collection()
client.modals = new Collection()
client.commandArray = [];


const functionFolders = fs.readdirSync(`./src/functions`);

for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith('.js'))

    for (const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(client);
    }
}


client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(BOT_TOKEN);


(async () => {
    await connect(DATABASE_URI, {}).catch((err) => {
        console.log(err);
    });
})();