const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    let tobcso= message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tobcso) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(`name`, "Staff");
let bcsorole = message.guild.roles.find(`name`, "BCSO");
let probrole = message.guild.roles.find(`name`, "BCSO Probationary");
let leorole = message.guild.roles.find(`name`, "LEO");
let nmrole = message.guild.roles.find(`name`, "New Member");
if(tobcso.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tobcso.removeRole(memberrole.id);


}

module.exports.help = {
    name: "giveme"
}
