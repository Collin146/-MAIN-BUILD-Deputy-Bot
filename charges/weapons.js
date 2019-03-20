const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "violation"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Weapons Discharge Violation (9)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who fires a firearm without due cause or justifiable motive regardless of registration status or legality. A person committing this offense from a vehicle, whether land, sea, or in air, shall instead be charged with (9)12. Drive-By Shooting.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Weapons Discharge Violation\' type: !weapons discharge violation.");

}

module.exports.help = {
    name: "weapons"
}
