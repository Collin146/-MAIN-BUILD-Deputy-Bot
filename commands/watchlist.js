const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !watchlist <user> <reason>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !watchlist <user> <reason>");
        return;
    }
    //te

let tostrike = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tostrike) return message.reply("Couldn't find that user.");
let kReason = args.slice(1).join(" ");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(tostrike.hasPermission("ADMINISTRATOR")) return message.reply("You cannot watchlist a Moderator or higher");
if (!kReason) return message.reply("Please give a reason");
let strikerole = message.guild.roles.find(`name`, "Watchlist");
if(!strikerole) return message.reply("The Watchlist role doesn't exist.");
let mentioned = message.mentions.users.first();
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");

geluktEmbed = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle(`${yes} **Done!**`)
.setDescription(`<@${tostrike.id}> has been given watchlist for \`${kReason}\``)
.setFooter(`Mentioned User ID: ${tostrike.id}`);

await (tostrike.addRole(strikerole.id), (kReason));
message.channel.send(geluktEmbed);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Moderation Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**The moderation command** !watchlist **has been used**`,
    ` `,
    `**Used On:** <@${tostrike.id}>`,
    ` `,
    `**Used In:** ${message.channel}`,
    ` `,
    `**Used By:** ${message.author.username}`,
    ` `,
    `**Reason For Watchlist:** ${kReason}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(ModEmbed);

let DMembed = new Discord.RichEmbed()
.setTitle(`**You have been put on watchlist in ${message.guild.name}**`)
.setColor("#ff0c00")
.addField("Punishment Type", "Watchlist")
.addField("Reason", kReason);

mentioned.send(DMembed);

//end of module
}

module.exports.help = {
    name: "watchlist"
}
