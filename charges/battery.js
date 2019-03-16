const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Battery (1)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who uses intentional and unlawful force or violence to cause physical harm to another person.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "battery"
}
