const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Vigilantism (5)04 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "Vigilantism does not apply when a law enforcement officer in the vicinity is in need of immediate assistance, and a civilian aids such officer - for example, helping an officer apprehend an unarmed resisting suspect by holding him down.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "vigilantism"
}
