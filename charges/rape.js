const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Rape (3)08 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "7 Minutes in prison.")
.addField("Information", "A person who forces another to engage in sexual intercourse. A person who performs non consensual sexual intercourse with another. A person who performs sexual intercourse with another who is incapacitated, disabled, or unable to give consent.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "rape"
}
