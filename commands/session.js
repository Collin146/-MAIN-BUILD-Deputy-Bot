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

let day = args[0];
let time = args[1];

message.channel.send([
    `@everyone`,
    ` `,
    "Session on",
     `${day} at ${time} PM GMT`,
    ` `,
    "Say yes to attend",
    "(if you say yes or maybe and dont show up without a valid reason, you will receive a strike)"
  ].join('\n'))

}


module.exports.help = {
    name: "session"
}
