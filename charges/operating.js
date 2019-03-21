const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[1] === "vehicle"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Operating A Vehicle With Open Doors (11.5)23 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$350");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Operating A Vehicle With Open Doors\' type: !operating a vehicle with open doors");
 
}

module.exports.help = {
    name: "operating"
}
