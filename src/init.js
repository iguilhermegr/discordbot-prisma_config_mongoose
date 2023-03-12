const { Collection } = require('discord.js')
const { readdirSync } = require('fs')
const { success, bold, getTime } = require('./utils/logger.js')
const { codeBlock } = require('@discordjs/builders');

module.exports = (client) => {

    client.commands = new Collection()

    client.developers = [
        "417067105897414667",
        "424931675009712128"
    ]

    client.on("messageCreate", async (message) => {

        let prefix = "."

        if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot || message.channel.type == "dm") return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === "eval" || command === "e") {

            if (client.developers.includes(message.author.id)) {

                let code = args.join(" ")
                if (!code) return message.reply({ content: "Você precisa inserir um código para ser executado" })

                let resultado;

                try {

                    const result = await eval(code)
                    resultado = require("util").inspect(result, { depth: 4 })
                    resultado.replace(process.env.TOKEN, "T0K3N")

                } catch (error) {

                    resultado = error.toString()

                }

                message.reply({ content: `${codeBlock('js', resultado)}` })

            }

        }

    })

    client.on("ready", () => {

        require('./Managers/Database.js')(client)

        console.log(`[${success('BOT')}] ${getTime(new Date())} > ${bold(client.user.tag)} bot online`)

    })
}
