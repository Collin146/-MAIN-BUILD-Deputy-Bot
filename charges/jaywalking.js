const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Jaywalking (11)15 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$490")
.addField("Information", "A person who recklessly or intentionally crosses a road in a manner that creates a foreseeable risk of obstructing the flow of traffic, or otherwise creates a hazard to themselves and others.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "jaywalking"
}
