const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "hydrant"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Fire Hydrant Parking Restriction (11)19 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "infraction")
.addField("Punishment(s)", "$430")
.addField("Information", "No person shall stop, park, or leave standing any vehicle within 15 feet of a fire hydrant except as follows: If the vehicle is attended by a licensed driver who is seated in the front seat and who can immediately move such vehicle in case of necessity. If the vehicle is owned or operated by the fire department and is clearly marked as a fire department vehicle.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Fire Hydrant Parking Restriction\' type: !fire hydrant parking restriction.")

}

module.exports.help = {
    name: "fire"
}
