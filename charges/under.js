const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[1] === "influence"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Under The Influence Of A Controlled Substance (6)09 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who uses or is under the influence of a controlled substance or dangerous substance without the proper permits or prescription to use such a substance. A person can only be charged with this statute for consumption of marijuana if they commit other crimes under the influence of marijuana, or if they are found to be under the influence of marijuana in public, or both.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Under The Influence Of A Controlled Substance\' type: !under the influence of a controlled substance.");

}

module.exports.help = {
    name: "under"
}
