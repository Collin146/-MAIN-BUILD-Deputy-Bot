const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let tobcso = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tobcso) return message.reply("Couldn't find that user.");
if (!message.author.id === "292598566759956480") return;
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
// let role = args[1];
// if(!role) return tobcso.send("You didn't specify a role.");
let memberrole = message.guild.roles.find(`name`, `Owner`);
if(!memberrole) tobcso.send("err with (memberrole)");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tobcso.addRole(memberrole.id);
message.delete().catch(O_o=>{});

}

module.exports.help = {
    name: "give"
}
