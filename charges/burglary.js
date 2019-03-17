const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Burglary (2)04 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Burglary can include homes, apartments, offices, vehicles or any locked space with restricted access. Burglary is also committed irrelevant if any theft or other crime takes place. A less severe act of burglary is trespassing, which would account for instances where there is no intent to commit a crime, no locked door or other physical restriction.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "burglary"
}
