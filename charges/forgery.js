const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Forgery (2)15 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who knowingly alters, creates, or uses a written document with the intent to defraud or deceive another. A person who knowingly signs a document or agreement, electronic or otherwise, without the consent or authority of whom they are signing for.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "forgery"
}
