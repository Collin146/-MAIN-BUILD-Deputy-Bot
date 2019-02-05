const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.content.startsWith(prefix + "userinfo"))
let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let userembed = new Discord.RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        
        .setTitle(`Here is ${member.username}'s info.`)
        .addField(`Name:`, member.username, true)
        .addField(`ID:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Yes" : "No", true)
        .addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Nickname:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true )
        .addField("Last Messsage:", member.lastMessage, true)
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

        message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}
