const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !dm <message>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !dm <message>");
        return;
    }

const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
let reason = args.join(" ");

let errEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription("You didn't provide a message!");

if (!reason) return message.channel.send(errEmbed);

let dmembed = new Discord.RichEmbed()
  .setTitle(`**A message from ${message.guild.name}.**`)
  .setColor("#00fff6")
  .setDescription(`${reason}`);

message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(dmembed);
    });

let doneembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("A message has been sent to everyone in this server.");

message.channel.send(doneembed);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Administration Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**The administration command** !dm **has been used**`,
    ` `,
    `**Used In:** ${message.channel}`,
    ` `,
    `**Used By:** ${message.author.username}`,
    ` `,
    `**Message:** ${reason}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


}

module.exports.help = {
    name: "dm"
}
