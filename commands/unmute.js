const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !unmute <user>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !unmute <user>");
        return;
    }

let tociv = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tociv) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let memberrole = message.guild.roles.find(x => x.name === 'Member');
let nmrole = message.guild.roles.find(x => x.name === 'Muted');
if(tociv.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)
    
   if(!memberrole) return message.reply("The role \'Member\' doesn't exist");
   if(!nmrole) return message.reply("The role \'Muted\' doesn't exist");

tociv.removeRole(nmrole.id);
tociv.addRole(memberrole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Moderation Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**The moderation command** !unmute **has been used**`,
    ` `,
    `**Used On:** <@${tociv.id}>`,
    ` `,
    `**Used In:** ${message.channel}`,
    ` `,
    `**Used By:** ${message.author.username}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${tociv.id}> has been unmuted!`)
      .setFooter(`Mentioned User ID: ${tociv.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "unmute"
}
