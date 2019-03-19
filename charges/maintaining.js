const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "place"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Maintaining A Place For The Purpose Of Distribution (6)04 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison.")
.addField("Information", "A person who opens or maintains any property for the purpose of unlawfully selling, giving away, storing, or using any controlled substance, firearm, or other illicit device, good, or service.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Maintaining A Place For The Purpose Of Distribution\' type: !maintaining a place for the purpose of distribution.");

}

module.exports.help = {
    name: "maintaining"
}
