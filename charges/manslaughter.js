const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Manslaughter (1)08 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "Manslaughter is murder that is not premeditated or proven to have intent or an opportunity to pause and reflect on killing that person. An opportunity to reflect (and therefore possibly change your mind) demonstrates premeditation and is murder. Manslaughter is only charged in the penal code when some sort of criminal negligence or action can be proven. Killing someone while driving drunk is manslaughter. Accidentally killing someone who jaywalks outside of a crosswalk is not criminal.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "manslaughter"
}
