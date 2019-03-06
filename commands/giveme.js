const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !bcso <user>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !bcso <user>");
        return;
    }    
    
let tobcso= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(!tobcso) return message.reply("Couldn't find that user.");
let memberrole = message.guild.roles.find(`name`, "Owner");
let bcsorole = message.guild.roles.find(`name`, "BCSO");
let probrole = message.guild.roles.find(`name`, "BCSO Probationary");
let leorole = message.guild.roles.find(`name`, "LEO");
let nmrole = message.guild.roles.find(`name`, "New Member");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tobcso.removeRole(memberrole.id);


}

module.exports.help = {
    name: "giveme"
}
