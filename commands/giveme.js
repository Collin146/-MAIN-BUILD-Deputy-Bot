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
if(!tobcso) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(`name`, "Owner");
if(tobcso.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tobcso.addRole(memberrole.id);


let ModEmbed = new Discord.RichEmbed()
.setTitle("BCSO command used!")
.setColor("GREEN")
.addField("User", `<@${tobcso.id}>`, true)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
if(message.content === "1779_check") {
    const ayy = client.emojis.find(emoji => emoji.name === "1779_check");
 }

warnchannel.send(ModEmbed);

geluktEmbed = new Discord.RichEmbed()
      .setAuthor(`The roles have successfully been updated!`)
      .setColor("GREEN")
      .setAuthor("${ayy} Done!")
      .setDescription(`The roles of <@${tobcso.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tobcso.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "giveme"
}
