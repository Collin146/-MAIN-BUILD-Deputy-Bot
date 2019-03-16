const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Intimidation (1)01 Info**")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "Intimidation differs from assault in terms of the distance between the acts. Intimidation can occur across the street, while assault is up close, within reach of leading to battery. Intimidation replaces criminal threats.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "intimidation"
}
