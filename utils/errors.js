const Discord = require("discord.js");
const fs = require("fs");
let config = require("../Botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

module.exports.noPerms = (message, perm) => {

const no = bot.emojis.get("561106624757104640");   

    let embed = new Discord.RichEmbed()

    .setTitle("❌ **Error!**")
    .setColor("RED")
    .setDescription(`Missing permission ${perm}.`);

message.channel.send(embed) //.then(m => m.delete(5000));

}
