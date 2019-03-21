const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "use"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Unnecessary Use Of Horn (11.5)21 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$100");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Unnecessary Use Of Horn\' type: !unnecessary use of horn");
 
}

module.exports.help = {
    name: "unnecessary"
}
