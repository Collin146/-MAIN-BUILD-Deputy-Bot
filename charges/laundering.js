const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "money"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Laundering Of Money Instuments (13)02 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "5 Minutes in prison.")
    .addField("Information", "A person who possesses, hides, transfers, receives, or maintains the storage of funds earned through comprehensive criminal activities. A person who intends to transfer, hide, cycle, or deceive funds collected through comprehensive criminal activities. A person who maintains an establishment with a purpose to launder funds collected through comprehensive criminal activities. This charge can only be issued by the Attorney General or a warrant by the Chief Justice. ");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Laundering Of Money Instruments\' type: !laundering of money instruments");

}

module.exports.help = {
    name: "laundering"
}
