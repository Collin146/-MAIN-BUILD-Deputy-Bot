const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "violation"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Wiretapping Violation (13)09 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "5 Minutes in prison.")
    .addField("Information", "A person who illegally conducts surveillance or wiretapping in violation of the one-party notification system without a warrant or authorization.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Wiretapping Violation\' type: !wiretapping violation.");

}

module.exports.help = {
    name: "wiretapping"
}
