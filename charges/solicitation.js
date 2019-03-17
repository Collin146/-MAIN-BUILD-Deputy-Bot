const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "prostitution"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Solicitation Of Prostitution (3)04 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "A person who offers payment, goods, services or other items of value to an individual in exchange for sexual acts");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Solicitation Of Prostitution\' type: !solicitation of prostitution")

  

}

module.exports.help = {
    name: "solicitation"
}
