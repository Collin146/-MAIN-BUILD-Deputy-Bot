const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "objects"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Throwing Objects (11.5)15 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$1,000")

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Throwing Objects\' type: !throwing objects");
 
}

module.exports.help = {
    name: "throwing"
}
