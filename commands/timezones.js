const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`timezones.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

        try {

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

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !timezones`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`,
    `**Time Defined:** ${args[0]}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

    if(args[0] === "6:30"){
            
message.channel.send([
    "**Other Timezones:**",
    "PDT: 10:30 AM",
    "EDT: 1:30 PM",
    "CEST: 7:30 PM",
    "MDT: 11:30 AM",
    "CDT: 12:30 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }

    if(args[0] === "7:00"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 11:00 AM",
    "EDT: 2:00 PM",
    "CEST: 8:00 PM",
    "MDT: 12:00 PM",
    "CDT: 1:00 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }


if(args[0] === "7:30"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 11:30 AM",
    "EDT: 2:30 PM",
    "CEST: 8:30 PM",
    "MDT: 12:30 PM",
    "CDT: 1:30 PM"
   ].join('\n'))

   message.delete().catch(O_o=>{});

  return;
    }

    if(args[0] === "8:00"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 12:00 PM",
    "EDT: 3:00 PM",
    "CEST: 9:00 PM",
    "MDT: 1:00 PM",
    "CDT: 2:00 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }

    if(args[0] === "8:30"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 12:30 PM",
    "EDT: 3:30 PM",
    "CEST: 9:30 PM",
    "MDT: 1:30 PM",
    "CDT: 2:30 PM"
   ].join('\n'))
         
   message.delete().catch(O_o=>{});

   return;
    }

     if(args[0] === "9:00"){

 message.channel.send([
    "**Other Timezones:**",
    "PDT: 1:00 PM",
    "EDT: 4:00 PM",
    "CEST: 10:00 PM",
    "MDT: 2:00 PM",
    "CDT: 3:00 PM"
   ].join('\n'))
           
   message.delete().catch(O_o=>{});

   return;
    }

} catch(err) {
    catchErr(err)
    
}
    
}

module.exports.help = {
    name: "timezones"
}
