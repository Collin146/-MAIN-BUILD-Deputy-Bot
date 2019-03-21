const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "load"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Unsecured Load (11.5)19 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$250");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Unsecured Load\' type: !unsecured load");
 
}

module.exports.help = {
    name: "unsecured"
}
