const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !sahp <user>");
        return;
    }

    let pdttime = parseInt(args[0] - 7);
    let edttime = (args[0] - 4);
    let cettime = (args[0] + 1);
    let mdttime = (args[0] - 6);
    let cdttime = (args[0] - 4);
    
    message.channel.send([
        "**Other Timezones:**",
        `PDT: ${pdttime}`,
        `EDT: ${edttime}`,
        `CET: ${cettime}`,
        `MDT: ${mdttime}`,
        `EDT: ${cdttime}`,
      ].join('\n'))
    

}


module.exports.help = {
    name: "timezones"
}
