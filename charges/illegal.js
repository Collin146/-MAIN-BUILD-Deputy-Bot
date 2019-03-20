const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "nitrous"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Illegal Nitrous Oxide Possession (11)07 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who drives a vehicle that contains, possesses, or shows characteristics of nitrous oxide equipment use while not on a official speedway or race track.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Illegal Nitrous Oxide Possession\' type: !illegal nitrous oxide possession.")

}

module.exports.help = {
    name: "illegal"
}
