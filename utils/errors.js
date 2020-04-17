const Discord = require("discord.js");
const fs = require("fs");
let config = require("../Botconfig.json");

module.exports.noPerms = (message, perm) => {

const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");  

    let embed = new Discord.RichEmbed()
    .setTitle(`${no} **Error!**`)
    .setColor("RED")
    .addField("Insufficient permissions", perm);

    //message.channel.send(embed).then(m => m.delete(5000));



}
