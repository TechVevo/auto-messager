const Discord = require('discord.js-self')
const client = new Discord.Client()

require('dotenv-flow').config()
const token = process.env.TOKEN

client.on('ready', () => {
    console.log(`${client.user.tag} is ready!`)
})

client.on('message', message => {
    if(message.author.id === client.user.id || message.author.bot) return;
    const channel = message.guild.channels.cache.get('845300702884659230')
    
    setInterval(() => {
        channel.send('!d bump')
    }, 7200000)
})

client.login(token)