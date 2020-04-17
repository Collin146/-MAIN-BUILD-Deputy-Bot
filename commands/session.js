const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");
let mentionrole = message.guild.roles.find(x => x.name === 'Member');
let day = args[0];
let time = args[1];
// let mentionchannel = message.guild.channels.find(x => x.name === 'reason-for-inactivity');

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a day & time!`);

if (!day) return message.channel.send(errEmbed);

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a time!`);

if (!time) return message.channel.send(errEmbed2);

message.channel.send([
    `<@&${mentionrole.id}>`,
    ` `,
    "**New Patrol Scheduled For",
    `\`${day}\` **at** \`${time}\` **PM BST**`,
    ` `,
    "**Say yes to attend**",
    `(If you say yes or maybe you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} in __before__ the patrol starts.)`
  ].join('\n'))

  message.delete().catch(O_o=>{});

}


module.exports.help = {
    name: "session"
}
