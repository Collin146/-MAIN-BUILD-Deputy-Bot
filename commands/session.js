const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !session <day and time>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !session <day and time>");
        return;
    }
    
    let sessiontime = args.join(" ");
    let botembed = new Discord.RichEmbed()
    .setColor("#00faff")
    .addField("@everyone")
    
    .addField("**Session On**")
    .addField(sessiontime)
 
    .addField("**Say yes to attend**")
    .addField("(if you say yes or maybe and dont show up without a valid reason, you will receive a strike)")
    return message.channel.send(botembed);

}

module.exports.help = {
    name: "session"


}
