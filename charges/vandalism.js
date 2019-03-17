const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Vandalism (2)17 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person that defaces, damages, or destroys property which belongs to another.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "vandalism"
}
