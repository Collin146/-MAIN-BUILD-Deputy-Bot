const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "signs"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Stop Signs (11.5)14 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$234")

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Stop Signs\' type: !stop signs");
 
}

module.exports.help = {
    name: "stop"
}
