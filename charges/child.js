const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "abuse"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Child Abuse (7)02 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "8 Minutes in prison")
  .addField("Information", "A person who willfully inflicts any cruel, excessive, or inhuman corporal punishment upon a child under 18 years of age. A person who willfully inflicts an injury to a child under 18 years of age, resulting in traumatic harm. A person who causes traumatic injury to a child under 18 years of age due to their negligence.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Child Abuse\' type: !child abuse");

  

}

module.exports.help = {
    name: "child"
}
