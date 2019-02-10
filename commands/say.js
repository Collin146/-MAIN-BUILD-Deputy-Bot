const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.content.startsWith(prefix)){
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);
        }else{
        //you can put whatever you'd like here. like a coin system or something.
        
//!say hi
//hi
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that.");
let botmessage = args.join(" ");
message.delete().catch();
message.channel.send(botmessage);
}

module.exports.help = {
    name: "say"
}
}
