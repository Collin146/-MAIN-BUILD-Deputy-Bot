const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "exposure"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Indecent Exposure (3)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Private parties / reservations in public areas are considered public events that can be restricted and therefore permit naked bodies. It is when it is in a public area or exposed to children that it is indecent exposure. Genetalia does not include breasts. Assume below the belt exposure.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Indecent Exposure\' type: !indecent exposure.")

}

module.exports.help = {
    name: "indecent"
}
