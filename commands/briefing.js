const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !tempmute <user> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !tempmute <user> <time length>");
        return;
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let mentionrole = message.guild.roles.find(`name`, `Member`);
let mutetime = args[0];
if(!mutetime) return message.reply("You didn't specify a time!");

setTimeout(function(){
    message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        "⚠ **Join Briefing Room Now!** ⚠"
      ].join('\n'))
}, ms(mutetime));

let dmembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setDescription(`I will post an announcement in ${message.channel} for briefing room in ${mutetime}.`)
.setTimestamp();
try{
    await message.author.send(dmembed);
}catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");

 }
 message.delete().catch(O_o=>{});

}

module.exports.help = {
    name: "briefing"
}const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !tempmute <user> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !tempmute <user> <time length>");
        return;
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let mentionrole = message.guild.roles.find(`name`, `Member`);
let mutetime = args[0];
if(!mutetime) return message.reply("You didn't specify a time!");

setTimeout(function(){
    message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        "⚠ **Join Briefing Room Now!** ⚠"
      ].join('\n'))
}, ms(mutetime));

let dmembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setDescription(`I will post an announcement in ${message.channel} for briefing room in ${mutetime}.`)
.setTimestamp();
try{
    await message.author.send(dmembed);
}catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");

 }
 message.delete().catch(O_o=>{});

}

module.exports.help = {
    name: "briefing"
}
