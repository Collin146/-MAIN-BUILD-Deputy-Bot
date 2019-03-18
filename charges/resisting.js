const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "peace"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Resisting A Peace Officer (4)12 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who avoids apprehension from an officer by non-vehicular means or resists apprehension by any physical means. This charge does not include the attempt to flee and evade by vehicular means, which is (8)02. Evading a Peace Officer.");
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Resisting A Peace Officer\' type: !resisting a peace officer");

}

module.exports.help = {
    name: "resisting"
}
