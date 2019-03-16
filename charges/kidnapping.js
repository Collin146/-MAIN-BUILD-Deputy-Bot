const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Kidnapping (1)11 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "Kidnapping is defined by a more egregious act of False Imprisonment. Kidnapping is when the False Imprisonment is premeditated or planned, done for ransom (any reward or action in return for the person’s safe return,) or for more than one hour, regardless of intent.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "kidnapping"
}
