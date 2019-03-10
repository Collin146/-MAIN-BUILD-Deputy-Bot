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

let input = message.content;
let command = input.substr(1).split(' ')[0];
let args2 = command.substr( command.indexOf(' ') + 1 );
let everyonerole = message.guild.roles.find('name', 'Member');
let day = args[0];
let time = args[1];
args2 = args.split(',').map(elem => elem.trim());


    let(` <@${everyonerole}>,**Session On**, ${day} **at** ${time}, ,**Say yes to attend**,(if you say yes or maybe and dont show up without a valid reason, you will receive a strike)`) = args;
}

module.exports.help = {
    name: "session"
}
