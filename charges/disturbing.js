const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "peace"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Disturbing The Peace (5)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who creates a dangerous or intimidating situation in a public place or in the public area of private property. A person who attempts to provoke, incite, or promote harm to another person through gestures, language, claims, actions, or other methods. A person whose profanity, language, voice, or noise reasonably disturbs nearby civilians or intends to incite violence.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Disturbing The Peace\' type: !disturbing the peace")

}

module.exports.help = {
    name: "disturbing"
}
