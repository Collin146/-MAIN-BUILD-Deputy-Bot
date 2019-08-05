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
let memberrole = message.guild.roles.find(x => x.name === 'Member');
let sahprole = message.guild.roles.find(x => x.name === 'SAHP');
let probrole = message.guild.roles.find(x => x.name === 'SAHP Probationary');
let leorole = message.guild.roles.find(x => x.name === 'LEO');
let nmrole = message.guild.roles.find(x => x.name === 'New Member');
if(tosahp.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");const yes = bot.emojis.get("561106357131018273");
//guildmember.setRoles(...)
    
   if(!memberrole) return message.reply("The role \'Member\' doesn't exist");
   if(!sahprole) return message.reply("The role \'SAHP\' doesn't exist");
   if(!probrole) return message.reply("The role \'SAHP Probationary\' doesn't exist");
   if(!leorole) return message.reply("The role \'LEO\' doesn't exist");

tosahp.removeRole(nmrole.id);
tosahp.addRole(memberrole.id);
tosahp.addRole(sahprole.id);
tosahp.addRole(probrole.id);
tosahp.addRole(leorole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Moderation Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**The moderation command** !sahp **has been used**`,
    ` `,
    `**Used On:** <@${tosahp.id}>`,
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
      .setDescription(`The roles of <@${tosahp.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${tosahp.id}`);

      message.channel.send(geluktEmbed);

//end of module

}

module.exports.help = {
    name: "sahp"
}
