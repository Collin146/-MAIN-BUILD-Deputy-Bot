const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }

let tosahp = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tosahp) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(`name`, "Member");
let sahprole = message.guild.roles.find(`name`, "SAHP");
let probrole = message.guild.roles.find(`name`, "SAHP Probationary");
let leorole = message.guild.roles.find(`name`, "LEO");
let nmrole = message.guild.roles.find(`name`, "New Member");
if(tosahp.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tosahp.removeRole(nmrole.id);
tosahp.addRole(memberrole.id);
tosahp.addRole(sahprole.id);
tosahp.addRole(probrole.id);
tosahp.addRole(leorole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("SAHP command used!")
.setColor("GREEN")
.addField("User", `<@${tosahp.id}>`, true)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
warnchannel.send(ModEmbed);

geluktEmbed = new Discord.RichEmbed()
      .setAuthor(`The roles have successfully been updated!`)
      .setColor("GREEN")
      .setAuthor("Done!")
      .setDescription(`The roles of <@${tosahp.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tosahp.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "sahp"
}
