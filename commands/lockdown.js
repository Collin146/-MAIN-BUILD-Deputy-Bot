const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

//   function catchErr (err, message) {

//     let errchannel = bot.channels.find(x => x.name === 'errors');
//     const warningsign = bot.emojis.get("700843409526620180");
    
//     errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`lockdown.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
//     }

// try {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !lockdown <lock/unlock>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !lockdown <lock/unlock>");
        return;
    }
    
    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 

    geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`Channel locked down.`)

      geluktEmbed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`Lockdown lifted.`)

    // if (message.member.hasPermission("MANAGE_MESSAGES")) {
    //  let time = args.join(' ');
    ow = message.channel.permissionOverwrites.get(message.guild.id);
    if (ow && ow.SEND_MESSAGES === false) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      });
      message.channel.send(geluktEmbed2);
      return;
     }

     if (ow && ow.SEND_MESSAGES === true) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      message.channel.send(geluktEmbed)
    };
    // }

//   } catch(err) {
//     catchErr(err)

//   }

}

module.exports.help = {
    name: "lockdown"

}
