const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "rape"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Statutory Rape (3)09 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "6 Minutes in prison")
  .addField("Information", "A person who engages in mutually-interested sexual intercourse with another who is under the age of 18 and therefore cannot give legal consent.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Statutory Rape\' type: !statutory rape")

  

}

module.exports.help = {
    name: "statutory"
}
