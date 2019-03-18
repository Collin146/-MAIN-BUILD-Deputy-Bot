const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Perjury (4)08 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "A person who knowingly provides false information while under oath in a court of law. A person who knowingly provides false information as part of an affidavit, testimony, court-ordered deposition, or document with a statement signifying its authenticity under penalty of perjury. This charge cannot stack with (4)06. False Information To A Government Employ");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "perjury"
}
