const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "tint"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Window Tint (11.5)22 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$112");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Window Tint\' type: !window tint");
 
}

module.exports.help = {
    name: "window"
}
