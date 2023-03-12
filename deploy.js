require('dotenv').config()

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const commands = [];

fs.readdirSync('./src/Commands').forEach((pasta) => {
  fs.readdirSync(`./src/Commands/${pasta}`).filter(file => file.endsWith('.js')).forEach((command) => {
    const comando = require(`./src/Commands/${pasta}/${command}`)
    commands.push(comando.data.toJSON());
  })
})

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
      
        console.log('[Slash Commands] Atualização dos comando iniciada.');

        await rest.put(Routes.applicationCommands(process.env.ID), { body: commands }).then(cmd => {
          cmd.map(command => {
            console.log(`[Slash Commands] Comando ${command.name} Atualizado!`)
          })
        })

       console.log('[Slash Commands] Atualização dos comando concluída.');

    } catch (error) {
        console.error(error);
    }
})();