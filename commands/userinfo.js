const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (msg.content.startsWith(prefix + "userinfo"))
    let member = msg.mentions.users.first() || msg.author;
    let userembed = new Discord.RichEmbed()
        .setColor(msg.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        
        .setTitle(`Here is ${member.username}'s info.`)
        .addField(`Name:`, member.username, true)
        .addField(`ID:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Yes" : "No", true)
        .addField("Game:", msg.guild.member(member).presence.game ? msg.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Nickname:", msg.guild.member(member).nickname ? msg.guild.member(member).nickname : "None", true )
        .addField("Last Messsage:", member.lastMessage, true)
        .addField(`Roles:`, msg.guild.member(member).roles.map(s => s).join(" | "), true)

        msg.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}
