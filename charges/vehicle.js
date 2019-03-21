const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "lights"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Vehicle Lights (11.5)16 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$150")
.addField("Information", "Neon, The non permitted colours include Blue, Red and Orange. Headlights but be limited to Yellow Or White ");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Vehicle Lights\' type: !vehicle lights");
 
}

module.exports.help = {
    name: "vehicle"
}
