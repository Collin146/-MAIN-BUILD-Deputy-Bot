const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Stalking (3)10 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "A person who intentionally and maliciously follows or harasses another person who has made it known that they do not consent to such following or harassment, A person who violates an official restraining order issued by a court.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "stalking"
}
