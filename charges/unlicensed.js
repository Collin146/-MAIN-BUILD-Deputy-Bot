const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[3] === "weapon"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Unlicensed Distribution Of A Weapon (9)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "7 Minutes in prison.")
.addField("Information", "A person who participates in the illegal distribution of any weapon defined under Title 9 without proper permits or authorization. A person who offers to sell any weapon defined under Title 9 without proper permits or authorization.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Unlicensed Distribution Of A Weapon\' type: !unlicensed distribution of a weapon");
 
}

module.exports.help = {
    name: "unlicensed"
}
