const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "exigency"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Police Exigency & Hot Pursuit Policy (12)14 Info**")
  .setColor("BLACK")
  .addField("Information", "Peace officers have the authority to follow suspects into private property if directly related to an ongoing pursuit. Entry related to investigations or other projects not in a direct pursuit of a suspect require a warrant. Peace officers have the authority to enter the public area of a private facility, such as the public area of a club or restaurant, at all times the facility is open to the public. Private areas of the facility require permission of the facility manager or a warrant. 12.15 Probable Cause & Plain View still applies when an officer is entering a facility for hot pursuit or entering the public area of a private facility.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Police Exigency & Hot Pursuit Policy\' type: !police exigency & hot pursuit policy");

}

module.exports.help = {
    name: "police"
}
