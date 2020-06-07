const rp = require('request-promise')
const Discord = require('discord.js');
const client = new Discord.Client();
const Prefix = '.' 

client.on('message', message => {
    if (message.content.startsWith(Prefix + 'vget')){
        let idOfMessage = message.content.toString().split(' ')[1]
        var options = {
            uri: 'https://vlo.to/user/get?discordId=' + idOfMessage,
            headers: { "Authorization": "" }, // check  https://admin.velo.gg/admin/profile for auth header
            json: true,
            resolveWithFullResponse: true
        }
        rp.get(options)
        .then (function(response, body) {
            console.log(response.body)
            const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .addFields(
                {name: 'email', value: (response.body).user.email},
                {name: 'key', value: (response.body).user.key},
                {name: 'discordId', value: (response.body).user.discordId},
                {name: 'expired', value: (response.body).user.expired},
                {name: 'status', value: (response.body).user.subscription.status},
                {name: 'price', value: (response.body).user.subscription.price},
                {name: 'next_renewal_timestamp', value: (response.body).user.subscription.next_renewal_timestamp},
                {name: 'next_renewal', value: (response.body).user.subscription.next_renewal},
                {name: 'joinedDate', value: (response.body).user.joinedDate},
            )
            .setFooter('Owen#0021')
            message.reply(exampleEmbed);
        })
    }
})
client.login('') //bot token here