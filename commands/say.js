const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var prefix = settings.prefix;
    const args = message.content.split(" ");
    const command = args.shift().slice(settings.prefix.length);
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
