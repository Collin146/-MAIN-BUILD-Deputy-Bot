const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "suspended"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Driving With A Suspended License (8)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who drives a vehicle, whether on land, sea, or in air, while having a suspended license or authorization.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Driving With A Suspended License\' type: !driving with a suspended license")

}

module.exports.help = {
    name: "driving"
}
