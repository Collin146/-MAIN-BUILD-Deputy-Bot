const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !dm <message>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !dm <message>");
        return;
    }

let reason = args.join(" ");

let dmembed = new Discord.RichEmbed()
.setTitle(`A message from ${message.guild.name}.`)
.setColor("#ff6a00")
.setDescription(`${reason}`);

message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(dmembed);
    });

}

module.exports.help = {
    name: "dm"
}
