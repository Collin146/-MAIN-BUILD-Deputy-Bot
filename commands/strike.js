const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !strike <1 or 2> <user> <reason>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !strike <1 or 2> <user> <reason>");
        return;
    }

let tostrike = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tostrike) return message.reply("Couldn't find that user.");
let kReason = args.slice(2).join(" ");
if (!kReason) return message.reply(`Please give a reason.`);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(tostrike.hasPermission("ADMINISTRATOR")) return message.reply("You cannot strike a Moderator or higher");
let strike1role = message.guild.roles.find(`name`, "Strike 1");
if(!strike1role) return message.reply("The role Strike 1 doesn't exist.");
let strike2role = message.guild.roles.find(`name`, "Strike 2");
if(!strike2role) return message.reply("The role Strike 2 doesn't exist.");
let mentioned = message.mentions.users.first();
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");

if(args[0] === "1"){

    geluktEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Done!**`)
    .setDescription(`<@${tostrike.id}> has been given strike 1 for \`${kReason}\``)
    .setFooter(`Mentioned User ID: ${tostrike.id}`);

    await (tostrike.addRole(strike1role.id), (kReason));
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Moderation Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The moderation command** !strike 1 **has been used**`,
        ` `,
        `**Used On** <@${tostrike.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Strike** ${kReason}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
    let warnchannel = message.guild.channels.find(`name`, "modlog");
    if(!warnchannel) return message.reply("Couldn't find channel");
    
    warnchannel.send(ModEmbed);

let DMembed = new Discord.RichEmbed()
.setTitle(`**You have been striked in ${message.guild.name}**`)
.setColor("#ff0c00")
.addField("Strike Type", "Strike 1")
.addField("Reason", kReason);
 
 mentioned.send(DMembed);
 
      return; 
      }

      if(args[0] === "2"){

    geluktEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Done!**`)
    .setDescription(`<@${tostrike.id}> has been given strike 2 for \`${kReason}\``)
    .setFooter(`Mentioned User ID: ${tostrike.id}`);

    await (tostrike.addRole(strike2role.id), (kReason));
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Moderation Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The moderation command** !strike 2 **has been used**`,
        ` `,
        `**Used On** <@${tostrike.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Strike** ${kReason}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
    let warnchannel = message.guild.channels.find(`name`, "modlog");
    if(!warnchannel) return message.reply("Couldn't find channel");
    
    warnchannel.send(ModEmbed);

let DMembed = new Discord.RichEmbed()
.setTitle(`**You have been striked in ${message.guild.name}**`)
.setColor("#ff0c00")
.addField("Strike Type", "Strike 2")
.addField("Reason", kReason);
 
 mentioned.send(DMembed);

    return; 
      }

message.reply(`Please provide which type of strike you want to use.`).then(msg => msg.delete(5000));

}

module.exports.help = {
    name: "strike"
}
