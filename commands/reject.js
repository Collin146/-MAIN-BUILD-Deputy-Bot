const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(21);
    if (!kReason) return message.reply("Please give a reason");
    if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot reject a Moderator or higher.");

    
let rejectembed = new Discord.RichEmbed()
.setTitle(`**Your application for ${message.guild.name} has been rejected!**`)
.setColor("RED")
.addField("Reason", kReason)
.addField("What To Do", "You can re apply through filling out the application form. Make sure you improve on the things you did wrong in the first try. Otherwise it will be rejected again.");
    
rUser.send(rejectembed);
    
    geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("**Done!**")
      .setDescription(`A message has been sent to <@${rUser.id}>!`)
      .setFooter(`Mentioned User ID: ${rUser.id}`);

      message.channel.send(geluktEmbed);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Reject command used!**")
.setColor("ORANGE")
.addField("User", `<@${rUser.id}>`, true)
.addField("Rejected For", kReason)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
warnchannel.send(ModEmbed);

}


module.exports.help = {
    name: "reject"

}
