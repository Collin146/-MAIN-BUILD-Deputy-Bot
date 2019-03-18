const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "violation"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Subpoena Violation (4)04 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who ignores or violates a subpoena order issued by the Courts. A person who ignores or violates a subpoena order issued by the Senate of the State of San Andreas");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Subpoena Violation\' type: !subpoena violation.")

}

module.exports.help = {
    name: "subpoena"
}
