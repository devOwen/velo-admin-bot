const rp = require('request-promise')
const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = '.' 

client.on('message', message => {
    if (message.content.startsWith(Prefix + 'vget')){
        let idOfMessage = message.content.toString().split(' ')[1]
        var options = {
            uri: 'https://vlo.to/user/get?discordId=' + idOfMessage,
            headers: { "Authorization": "" }   // check  https://admin.velo.gg/admin/profile for auth header
        }
        rp.get(options)
        .then (function(response) {
            message.channel.send(response)
        })
    }
})
client.login('token') //bot token here
