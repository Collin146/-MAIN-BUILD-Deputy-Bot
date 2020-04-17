const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !kick <user> <reason>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !kick <user> <reason>");
        return;
    }
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || bot.users.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.slice(1).join(" ");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot kick a Moderator or higher.");
    // if(!kReason) return message.reply("Please give a reason.")
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${kUser.id}> has been kicked!`)
      .setFooter(`Mentioned User ID: ${kUser.id}`);

    message.guild.member(kUser).kick(kReason || "None");
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Moderation Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**The moderation command** !kick **has been used**`,
        ` `,
        `**Used On:** <@${kUser.id}>`,
        ` `,
        `**Used In:** ${message.channel}`,
        ` `,
        `**Used By:** ${message.author.username}`,
        ` `,
        `**Reason For Kick:** ${kReason || "None"}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


    let dmembed =  new Discord.RichEmbed()
    .setTitle(`**You have been kicked from ${message.guild.name}.**`)
    .setColor("#00fff6")
    .addField("Reason:", kReason || "None");

    kUser.send(dmembed);

}

module.exports.help = {
    name: "kick"

}
