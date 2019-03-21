const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "hijacking"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Corporate Hijacking (13)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person or group who unlawfully and willfully uses a business premises for trade, corporate or financial gain without license, lease or consent from it's registered owner.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Corporate Hijacking\' type: !corporate hijacking");

}

module.exports.help = {
    name: "corporate"
}
