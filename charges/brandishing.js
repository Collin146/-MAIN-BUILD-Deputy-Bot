const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "firearm"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Brandishing A Firearm (9)10 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who is pointing, holding, or brandishing a firearm, air or gas operated weapon, or object that appears like a firearm without proper toy and prop identification in an attempt to elicit fear or hysteria. A person holding an object in a manner similar to a firearm who attempts to elicit the same fear or response as brandishing an actual firearm.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Brandishing A Firearm\' type: !brandishing a firearm.");

}

module.exports.help = {
    name: "brandishing"
}
