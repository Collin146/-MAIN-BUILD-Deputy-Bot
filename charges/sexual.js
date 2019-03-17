const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "assault"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Sexual Assault (3)06 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "3 Minutes in prison")
  .addField("Information", "A person who commits verbal abuse for the purpose of sexual arousal, gratification, or abuse. A person who threatens imminent harm or nonconsensual sexual contact or puts another under the belief of imminent harm or nonconsensual sexual contact.");

  message.channel.send(argembed);

  return; 
  }

  if(args[0] === "battery"){

    let argembed = new Discord.RichEmbed()
      .setTitle("**Sexual Battery (3)07 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Felony")
      .addField("Punishment(s)", "5 Minutes in prison")
      .addField("Information", "A person who commits verbal abuse for the purpose of sexual arousal, gratification, or abuse. A person who threatens imminent harm or nonconsensual sexual contact or puts another under the belief of imminent harm or nonconsensual sexual contact.");
    
      message.channel.send(argembed);
    
      return; 
      }

  message.reply("If you are looking for \'Sexual Assault\' type: !sexual assault. If you are looking for \'Sexual Battery\' type: !sexual battery")

  

}

module.exports.help = {
    name: "sexual"
}
