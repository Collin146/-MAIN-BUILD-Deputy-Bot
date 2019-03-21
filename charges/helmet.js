const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "law"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Helmet Law (11.5)18 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$120");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Helmet Law\' type: !helmet law");
 
}

module.exports.help = {
    name: "helmet"
}
