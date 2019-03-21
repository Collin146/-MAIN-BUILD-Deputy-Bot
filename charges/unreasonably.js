const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "slow"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Unreasonably Slow / Stopped (11.5)13 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$234")

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Unreasonably Slow / Stopped\' type: !unreasonably slow / stopped");
 
}

module.exports.help = {
    name: "unreasonably"
}
