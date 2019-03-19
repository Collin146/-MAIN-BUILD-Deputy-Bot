const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "obstruction"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Facial Obstruction While Committing A Crime (6)10 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who wears any mask, hood, or facial obstruction to conceal their identity in any public place that refuses to remove the obstruction upon order of a peace officer. This does not apply to individuals wearing traditional holiday costumes, or individuals wearing protective facial equipment for professional trades or employment. A person who wears any mask, hood, or facial obstruction while committing a crime, regardless of the purpose of the obstruction");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Facial Obstruction While Committing A Crime\' type: !under the influence of a controlled substance.");

}

module.exports.help = {
    name: "facial"
}
