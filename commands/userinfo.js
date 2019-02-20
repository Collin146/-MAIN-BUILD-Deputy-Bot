const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, client, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !userinfo <user>");
        return;
    }

    let member = message.mentions.users.first() || client.users.first() || message.author;
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
        .addField(`User Joined On`, message.guild.member(member).joinedAt, true)
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

        message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}
