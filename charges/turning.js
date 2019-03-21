const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Turning (11.5)08 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "infraction")
.addField("Punishment(s)", "$234");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "turning"
}
