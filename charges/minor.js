const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "alcohol"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Minor Alcohol Violation (7)04 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$800")
    .addField("Information", "A minor under the age of 21 who is in possession of alcohol for consumption, products for consumption containing alcohol, or appears to be under the influence of alcohol.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Minor Alcohol Violation\' type: !minor alcohol violation.");

}

module.exports.help = {
    name: "minor"
}
