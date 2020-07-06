const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  function catchErr (err, message) {

    let errchannel = bot.channels.find(x => x.name === 'errors');
    const warningsign = bot.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`lockdown.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

try {
    
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

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
         if (!bot.lockit) bot.lockit = [];
         let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send(geluktEmbed2);
        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
     } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send(geluktEmbed).then(() => {
   
        }).catch(error => {
          console.log(error);
        });
      });
    }
    }

let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**Command:** !lockdown`,
        `**Used In:** ${message.channel}`,
        `**Used By:** ${message.author.username}`,
        `**Status:** ${args[0] || "lock"}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

  } catch(err) {
    catchErr(err)

  }

}

module.exports.help = {
    name: "lockdown"

}
