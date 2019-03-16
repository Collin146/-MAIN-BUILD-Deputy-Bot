const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Mayhem (1)12 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison.")
.addField("Information", "A person who intentionally causes extreme pain and suffering to a person, with or without permanent damage to the body. A person who causes pain and suffering for the purpose of revenge, extortion, persuasion, or for any sadistic purpose. A person who intentionally disfigures, disables, or aggressively destroys or damages a body part or area of a body or person’s body");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "mayhem"
}
