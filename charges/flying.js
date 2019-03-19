const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "without"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Flying Without A Pilot's License (8)07 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "3 Minutes in prison")
  .addField("Information", "A person operating an aircraft without a proper license or authorization.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Flying Without A Pilot's License\' type: !flying without a pilot's license");

}

module.exports.help = {
    name: "flying"
}
