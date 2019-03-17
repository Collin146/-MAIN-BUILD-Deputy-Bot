const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Theft (2)09 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who steals or takes the personal property of another worth more than $2,500 but less than $10,000.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "theft"
}
