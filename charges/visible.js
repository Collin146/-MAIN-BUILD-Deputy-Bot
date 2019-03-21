const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "plate"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Visible Plate (11.5)20 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$112");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Visible Plate\' type: !visible plate");
 
}

module.exports.help = {
    name: "visible"
}
