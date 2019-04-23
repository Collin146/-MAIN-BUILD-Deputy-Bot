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

let tobcso = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tobcso) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(`name`, "Member");
let bcsorole = message.guild.roles.find(`name`, "BCSO");
let probrole = message.guild.roles.find(`name`, "BCSO Probationary");
let leorole = message.guild.roles.find(`name`, "LEO");
let nmrole = message.guild.roles.find(`name`, "New Member");
if(tobcso.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

   if(!memberrole) return message.reply("The role \'Member\' doesn't exist");
   if(!bcsorole) return message.reply("The role \'BCSO\' doesn't exist");
   if(!probrole) return message.reply("The role \'BCSO Probationary\' doesn't exist");
   if(!leorole) return message.reply("The role \'LEO\' doesn't exist");
    
tobcso.removeRole(nmrole.id);
tobcso.addRole(memberrole.id);
tobcso.addRole(bcsorole.id);
tobcso.addRole(probrole.id);
tobcso.addRole(leorole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Moderation Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**The moderation command** !bcso **has been used**`,
    ` `,
    `**Used On:** <@${tobcso.id}>`,
    ` `,
    `**Used In:** ${message.channel}`,
    ` `,
    `**Used By:** ${message.author.username}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(ModEmbed);

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`The roles of <@${tobcso.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tobcso.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "bcso"
}
