require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_SCHEDULED_EVENTS", "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGES"]
})

client.login(process.env.TOKEN)

require('./src/init.js')(client)