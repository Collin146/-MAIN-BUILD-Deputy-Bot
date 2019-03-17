const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "theft"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Petty Theft (2)08 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "2 Minutes in prison")
  .addField("Information", "A person who steals or takes the personal property of another worth $2,500 or less.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Petty Theft\' type: !petty theft")

  

}

module.exports.help = {
    name: "petty"
}
