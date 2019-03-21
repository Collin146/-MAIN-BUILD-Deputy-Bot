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

let tociv = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tociv) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(`name`, "Member");
let civilianrole = message.guild.roles.find(`name`, "Civilian");
let civ1role = message.guild.roles.find(`name`, "Civ 1");
let nmrole = message.guild.roles.find(`name`, "New Member");
if(tociv.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tociv.removeRole(nmrole.id);
tociv.addRole(memberrole.id);
tociv.addRole(civilianrole.id);
tociv.addRole(civ1role.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Civilian command used!**")
.setColor("GREEN")
.addField("User", `<@${tociv.id}>`, true)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
warnchannel.send(ModEmbed);

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("**Done!**")
      .setDescription(`The roles of <@${tociv.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tociv.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "civilian"
}
