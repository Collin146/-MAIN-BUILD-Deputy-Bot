const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "property"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Receiving Stolen Property (2)13 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "2 Minutes in prison")
  .addField("Information", "If an officer can prove that the individual should have known the item was stolen based on outside factors, such as the price or quality, or any sort of common knowledge, then the person can be charged.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Receiving Stolen Property\' type: !receiving stolen property");

  

}

module.exports.help = {
    name: "receiving"
}
