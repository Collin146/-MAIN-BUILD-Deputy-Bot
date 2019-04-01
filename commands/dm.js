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
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");

let dmembed = new Discord.RichEmbed()
.setTitle(`**A message from ${message.guild.name}.**`)
.setColor("#00fff6")
.setDescription(`${reason}`);

message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(dmembed);
    });

let doneembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("A message has been sent to everyone in this server.");

message.channel.send(doneembed);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Dm command used!**")
.setColor("RED")
.addField("Message", `${reason}`)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
warnchannel.send(ModEmbed);

}

module.exports.help = {
    name: "dm"
}
