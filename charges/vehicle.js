const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "lights"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Vehicle Lights (11.5)16 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$150")

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Vehicle Lights\' type: !vehicle lights");
 
}

module.exports.help = {
    name: "vehicle"
}
