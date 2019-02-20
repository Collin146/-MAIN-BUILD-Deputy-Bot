const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !userinfo <user>");
        return;
    }

    let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(x => x.user.tag === args[0]) || message.guild.members.find(x => x.user.username === args[0]) || message.member;
    let userembed = new Discord.RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        
        .setTitle(`Here is ${member.usertag}'s info.`)
        .addField(`Name:`, member.usertag, true)
        .addField(`ID:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Yes" : "No", true)
        .addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Nickname:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true )
        .addField("Last Messsage:", member.lastMessage, true)
        .addField(`User Joined On`, message.guild.member(member).joinedAt, true)
        .addField(`User Created On`, message.user.createdTimestamp())
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

        message.channel.send(userembed);
}

module.exports.help = {
    name: "userinfo"
}
