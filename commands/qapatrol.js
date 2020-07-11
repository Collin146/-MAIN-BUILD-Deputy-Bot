const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`session.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

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
    
    let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !session`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`,
    `**Day & Time:** ${args[0]} at ${args[1]}`,
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});
    
    if(args[1] === "6:30pm"){

let patrolembed1 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          `**Other Timezones:**`,
          `PDT: 10:30 AM`,
          `EDT: 1:30 PM`,
          `CEST: 7:30 PM`,
          `MDT: 11:30 AM`,
          `CDT: 12:30 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed1);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }
    
    if(args[1] === "7:00pm"){

let patrolembed2 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          ` `,
          `**Other Timezones:**`,
          `PDT: 11:00 AM`,
          `EDT: 2:00 PM`,
          `CEST: 8:00 PM`,
          `MDT: 12:00 PM`,
          `CDT: 1:00 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed2);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }

    if(args[1] === "7:30pm"){

let patrolembed3 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          ` `,
          `**Other Timezones:**`,
          `PDT: 11:30 AM`,
          `EDT: 2:30 PM`,
          `CEST: 8:30 PM`,
          `MDT: 12:30 PM`,
          `CDT: 1:30 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed3);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }

    if(args[1] === "8:00pm"){

let patrolembed4 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          ` `,
          `**Other Timezones:**`,
          `PDT: 12:00 PM`,
          `EDT: 3:00 PM`,
          `CEST: 9:00 PM`,
          `MDT: 1:00 PM`,
          `CDT: 2:00 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed4);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }

    if(args[1] === "8:30pm"){

let patrolembed5 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          ` `,
          `**Other Timezones:**`,
          `PDT: 12:30 PM`,
          `EDT: 3:30 PM`,
          `CEST: 9:30 PM`,
          `MDT: 1:30 PM`,
          `CDT: 2:30 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed5);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }

     if(args[1] === "9:00pm"){

let patrolembed6 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
          ` `,
          `**Other Timezones:**`,
          `PDT: 1:00 PM`,
          `EDT: 4:00 PM`,
          `CEST: 10:00 PM`,
          `MDT: 2:00 PM`,
          `CDT: 3:00 PM`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed6);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});

return;
    }
    
    let patrolembed7 = new Discord.RichEmbed()
      .setTitle("**New Patrol Scheduled!**")
      .setColor("BLACK")
      .setDescription([
          `**Date & Time:** ${day}, ${time} BST`,
          ` `,
          `**What To Do:** To confirm your attendance, press the reaction below.`,
          ` `,
          `**Notice:** If you say yes you are required to show up to the patrol. If you can't show up with a reason inform ${message.author} __before__ the patrol starts. Please note that you will have to show up to briefing room. This starts 30 minutes prior to the time announced above).`,
        ].join('\n'))

  message.channel.send(`<@&${mentionrole.id}>`);
  
  const sentMessage =  await message.channel.send(patrolembed7);
  await sentMessage.react(yes.id);

  message.delete().catch(O_o=>{});
    
    } catch(err) {
        //catchErr(err)
        
        console.log(err)
    }

}

module.exports.help = {
    name: "qapatrol"
}
