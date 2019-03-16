const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "combat"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Mutual Combat (1)04 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who engages in mutual combat with another individual in an area accessible to the public, or in public view, regardless of the consent of the individuals involved.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Mutual Combat\' type: !mutual combat.")

}

module.exports.help = {
    name: "mutual"
}
