const Discord = require("discord.js");
const fs = require("fs");
let config = require("../Botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("No Permissions")
    .setColor("#ff0000")
    .addField("Insufficient permissions", perm);

    message.channel.send(embed).then(m => m.delete(5000));



}