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

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
//let tostrike = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
const tostrike = message.mentions.users.first() || await bot.fetchUser(args[0]);

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`Was not able to find that user.`);

if(!tostrike) return message.channel.send(errEmbed);
let kReason = args.slice(2).join(" ");

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't give a reason!`);

if (!kReason) return message.channel.send(errEmbed2);
let strike1role = message.guild.roles.find(x => x.name === 'Strike 1');

let errEmbed3 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`The \"Strike 1\" role does not exist!`);

if(!strike1role) return message.channel.send(errEmbed3);
let strike2role = message.guild.roles.find(x => x.name === 'Strike 2');

let errEmbed4 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`The \"Strike 2\" role does not exist!`);

if(!strike2role) return message.channel.send(errEmbed4);
let mentioned = message.mentions.users.first();

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
        `**Used On:** <@${tostrike.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Strike** ${kReason}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});
    

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
        `**Used On:** <@${tostrike.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Strike** ${kReason}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


let DMembed = new Discord.RichEmbed()
.setTitle(`**You have been striked in ${message.guild.name}**`)
.setColor("#ff0c00")
.addField("Strike Type", "Strike 2")
.addField("Reason", kReason);
 
 mentioned.send(DMembed);

    return; 
      }

let errEmbed5 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${no} **Error!**`)
    .setDescription(`You didn't provide which type of strike you want to use!`);

message.channel.send(errEmbed5) //.then(msg => msg.delete(5000));

}

module.exports.help = {
    name: "strike"
}
