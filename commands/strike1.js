const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !strike <user> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !strike <user> <time length>");
        return;
    }

//!tempmute @user 1s/m/h/d

let strike1 = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!strike1) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(strike1.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute a Moderator or higher");
let strikerole = message.guild.roles.find(`name`, "Strike 1");
let reason = args.join(" ").slice(22);

let striketime = args[1];
if(!striketime) return message.reply("You didn't specify a time!");

await(strike1.addRole(strike1.id));
message.reply(`<@${strike1.id}> has been striked for ${ms(ms(striketime))}`);

setTimeout(function(){
    tomute.removeRole(strikerole.id);
    message.channel.send(`<@${strike1}.id}> has been removed from Strike 1!`);
}, ms(striketime));


//end of module
}

module.exports.help = {
    name: "strike1"
}
