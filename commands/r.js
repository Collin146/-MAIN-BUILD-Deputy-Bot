const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !r");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !r");
        return;
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let mentionrole = message.guild.roles.find(`name`, `Member`);
let traineerole = message.guild.roles.find("name", "Trainee");

    message.channel.send([
        `<@&${mentionrole.id || traineerole.id}>`,
        ` `,
        "⚠ **Reminder!** ⚠"
      ].join('\n'))

 message.delete().catch(O_o=>{});

}

module.exports.help = {
    name: "r"
}
