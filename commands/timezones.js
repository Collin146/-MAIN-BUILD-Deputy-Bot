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

    if(args[0] === "6:30"){
    
        //let time = args[0];
        
message.channel.send([
    "**Other Timezones:**",
    "PDT: 11:30 AM",
    "EDT: 2:30 PM",
    "CEST: 2:30 PM",
    "MDT: 12:30 PM",
    "CDT: 1:30 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }

    if(args[0] === "7:00"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 12:00 PM",
    "EDT: 3:00 PM",
    "CEST: 8:00 PM",
    "MDT: 1:00 PM",
    "CDT: 2:00 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }


if(args[0] === "7:30"){
    
//let time = args[0];

message.channel.send([
    "**Other Timezones:**",
    "PDT: 12:30 PM",
    "EDT: 3:30 PM",
    "CEST: 8:30 PM",
    "MDT: 1:30 PM",
    "CDT: 2:30 PM"
   ].join('\n'))

   message.delete().catch(O_o=>{});

  return;
    }

    if(args[0] === "8:00"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 1:00 PM",
    "EDT: 4:00 PM",
    "CEST: 9:00 PM",
    "MDT: 2:00 PM",
    "CDT: 3:00 PM"
   ].join('\n'))
        
   message.delete().catch(O_o=>{});

   return;
    }

    if(args[0] === "8:30"){

message.channel.send([
    "**Other Timezones:**",
    "PDT: 1:30 PM",
    "EDT: 4:30 PM",
    "CEST: 9:30 PM",
    "MDT: 2:30 PM",
    "CDT: 3:30 PM"
   ].join('\n'))
         
   message.delete().catch(O_o=>{});

   return;
    }

     if(args[0] === "9:00"){

 message.channel.send([
    "**Other Timezones:**",
    "PDT: 2:00 PM",
    "EDT: 5:00 PM",
    "CEST: 10:00 PM",
    "MDT: 3:00 PM",
    "CDT: 4:00 PM"
   ].join('\n'))
           
   message.delete().catch(O_o=>{});

   return;
    }
    
}


module.exports.help = {
    name: "timezones"
}
