const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "rage"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Road Rage (11.5)17 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$340")
.addField("Information", "Does not stack with reckless driving");

message.channel.send(intimembed);

 
return;
}

message.reply("If you are looking for \'Road Rage\' type: !road rage");
 
}

module.exports.help = {
    name: "road"
}
