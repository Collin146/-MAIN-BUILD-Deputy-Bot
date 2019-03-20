const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "pf"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**CCW / PF Violation (9)13 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who carries concealed a legal, registered firearm that is not authorized as a conceal-carry weapon. A person who carries concealed a legal, registered firearm that they are not authorized to carry concealed. A person who does not carry proper permits or documentation for their weapon or occupational weapon usage. Any other firearms regulatory violations as set by the appropriate licensing agency.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'CCW / PF Violation\' type: !ccw / pf violation.");

}

module.exports.help = {
    name: "ccw"
}
