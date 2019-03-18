const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "pay"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Failure To Pay A Fine (4)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Arrest warrant applications for this charge can only be filed by the officer who issued the fine the person failed to pay, or by a Sergeant within their department. However, any officer may perform an arrest regardless of whether a warrant has been issued for this charge if they encounter an individual with an unpaid fine.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Failure To Pay A Fine\' type: !failure to pay a fine.")

}

module.exports.help = {
    name: "failure"
}
