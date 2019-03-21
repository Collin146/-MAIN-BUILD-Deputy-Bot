const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "practice"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Legal Practice Violation (13)05 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "6 Minutes in prison.")
    .addField("Information", "A person who advertises or portrays themselves as practicing or as being entitled to practice law without being an active member of the San Andreas State Bar.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Legal Practice Violation\' type: !legal practice violation");

}

module.exports.help = {
    name: "legal"
}
