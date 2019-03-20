const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "racing"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Street Racing (11)13 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison & License Suspension For 4 Days")
    .addField("Information", "Performing an unlicensed or unauthorized vehicle race, performance, or competition on city, county, or state property. Performing a vehicle race on a hazardous private course. Organizing, facilitating, or promoting a street race or other unlicensed or organized vehicle race or competition on city, county, or state property.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Street Racing\' type: !street racing");

}

module.exports.help = {
    name: "street"
}
