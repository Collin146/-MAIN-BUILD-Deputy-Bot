const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "license"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Gambling License Violation (13)03 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "4 Minutes in prison.")
    .addField("Information", "A person who violates the terms of their gambling or gaming license. A person who falsely claims to operate a business with a gambling or gaming license. A person who intentionally operates rigged games. A person who violates the policies set by the Licensing Code of San Andreas for gaming and games of chance. A person who operates any game of chance without proper permits, licenses, or authorizations. (This excludes games played in private residences, in which no person makes money for operating the game, except as a player.)");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Gambling License Violation\' type: !gambling license violation");

}

module.exports.help = {
    name: "gambling"
}
