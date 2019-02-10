const Discord = require("discord.js");
const botconfig = require("./Botconfig.json");

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd =  messageArray[0];
    let args = messageArray.slice(1);

});

module.exports.run = async (bot, message, args) => {
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
