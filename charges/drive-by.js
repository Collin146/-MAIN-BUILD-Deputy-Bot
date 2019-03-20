const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "shooting"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Drive-By Shooting (9)12 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "8 Minutes in prison.")
    .addField("Information", "A person who drives a vehicle, whether on land, sea, or in air, and has a passenger who they knowingly and willingly let discharge a firearm from within the vehicle, and the passenger is not an on-duty peace officer. A person who exits a vehicle only to immediately discharge a firearm afterward. A person who discharges a weapon in a vehicle, whether on land, sea, or in air, and is not an on-duty peace officer with proper authorization.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Drive-By Shooting\' type: !drive-by shooting.");

}

module.exports.help = {
    name: "drive-by"
}
