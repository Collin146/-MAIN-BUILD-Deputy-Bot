const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Arson (2)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "Arson’s criminality is when someone intentionally creates or helps create a fire, as it can easily grow out of control and cause death. It is up to the Fire Marshal’s Office and investigating Law Enforcement Agency jointly to prove an arson was malicious and therefore criminal. Negligence or accident can be included if it is proven criminal in nature.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "arson"
}
