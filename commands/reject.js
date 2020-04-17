const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");  
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let errEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription(`Was not able to find that user!`);

    if(!rUser) return message.channel.send(errEmbed);
    let kReason = args.slice(1).join(" ");

    let errEmbed2 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${no} **Error!**`)
    .setDescription(`You didn't provide a reason!`);

    if (!kReason) return message.channel.send(errEmbed2);
    if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot reject a Moderator or higher.");
    
let rejectembed = new Discord.RichEmbed()
.setTitle(`**Your application for ${message.guild.name} has been rejected!**`)
.setColor("RED")
.addField("Reason", kReason)
.addField("What To Do", "You can reapply by filling out the application form again, however make sure you improve on the things you did wrong in the first try, otherwise it can/will be rejected again.");
    
rUser.send(rejectembed);
    
    geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`A message has been sent to <@${rUser.id}>!`)
      .setFooter(`Mentioned User ID: ${rUser.id}`);

      message.channel.send(geluktEmbed);

      let ModEmbed = new Discord.RichEmbed()
      .setTitle("**Moderation Command Used!**")
      .setTimestamp()
      .setColor("BLACK")
      .setDescription([
          `**The moderation command** !reject **has been used**`,
          ` `,
          `**Used On:** <@${rUser.id}>`,
          ` `,
          `**Used In:** ${message.channel}`,
          ` `,
          `**Used By:** ${message.author.username}`,
          ` `,
          `**Rejected For:** ${kReason}`,
        ].join('\n'))
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

}

module.exports.help = {
    name: "reject"

}
