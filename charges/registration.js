const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "violation"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Registration Violation (11)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$980")
    .addField("Information", "A person driving a vehicle on a state, county, or local road without an official owner’s registration or lease registration on file or in hand, or an individual who operates a motor vehicle with no valid license plates on a public roadway.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Registration Violation\' type: !registration violation");

}

module.exports.help = {
    name: "registration"
}
