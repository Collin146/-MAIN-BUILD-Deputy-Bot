const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !userinfo <user>");
        return;
    }

    let x = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(x => x.user.tag === args[0]) || message.guild.members.find(x => x.user.username === args[0]) || message.member;
    let userembed = new Discord.RichEmbed()
        .setColor(message.guild.member(x).highestRole.color)
        .setThumbnail(x.displayAvatarURL)
        
        .setTitle(`Here is ${x.username}'s info.`)
        .addField(`Name:`, x.username, true)
        .addField(`ID:`, x.id, true)
        .addField(`Bot:`, x.bot ? "Yes" : "No", true)
        .addField("Game:", message.guild.member(x).presence.game ? message.guild.member(x).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Nickname:", message.guild.member(x).nickname ? message.guild.member(x).nickname : "None", true )
        .addField("Last Messsage:", x.lastMessage, true)
        .addField(`User Joined On`, message.guild.member(x).joinedAt, true)
        .addField(`Roles:`, message.guild.member(x).roles.map(s => s).join(" | "), true)

        message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}
