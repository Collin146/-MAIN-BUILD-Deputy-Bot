const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }
let mentionrole = message.guild.roles.find(x => x.name === 'Member');
let day = args[0];
let time = args[1];
// let mentionchannel = message.guild.channels.find(x => x.name === 'reason-for-inactivity');

message.channel.send([
    `<@&${mentionrole.id}>`,
    ` `,
    "**Patrol at",
    `\`${day}\` **at** \`${time}\` **PM BST**`,
    ` `,
    "**Say yes to attend**",
    "(If you say yes or maybe you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} in __before__ the patrol starts.)"
  ].join('\n'))

  message.delete().catch(O_o=>{});

}


module.exports.help = {
    name: "session"
}
