const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !lockdown <length>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !lockdown <length>");
        return;
    }
    

    if (message.member.hasPermission("ADMINISTRATOR")) {
         if (!bot.lockit) bot.lockit = [];
         let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.sendMessage('Lockdown lifted.');
        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
     } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.sendMessage(`Channel locked down.`).then(() => {
   
          bot.lockit[message.channel.id] = setTimeout(() => {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then(message.channel.sendMessage('Lockdown lifted.')).catch(console.error);
            delete bot.lockit[message.channel.id];
          }, ms(time));
   
        }).catch(error => {
          console.log(error);
        });
      });
    }
    }
}

module.exports.help = {
    name: "lockdown"

}
