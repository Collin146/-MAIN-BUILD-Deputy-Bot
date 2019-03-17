const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "within"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Trespassing within a Restricted Zone (2)03 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "3 Minutes in prison.")
  .addField("Information", "As an example: areas of a police station that are restricted (i.e. armory, locker rooms, offices), trespassing inside the restricted areas of the Correctional Facility, trepassing inside restricted areas of a hospital (i.e. staff area of the pharmacy, surgery theatres when not permitted).");

  message.channel.send(argembed);

  return; 
  }

  let intimembed = new Discord.RichEmbed()
  .setTitle("**Trespassing (2)02 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "$2,000 or 2 Minutes in prison.")
  .addField("Information", "Trespassing refers to anyone who is told to leave and refuses to do so, but lacks any intention of committing a crime or other malice aforethought or action. Burglary is a far more severe act of trespassing as it comes with evidence of criminal intent. If police close down a public space it is trespassing to enter that public space without their authorization. The same applies if a typically public space is temporarily closed. Owners of trailers or caravans may only consider their trailer or caravan their own property. The surrounding trailer park is not considered their own property when the area includes several other trailers and caravans that are not owned by one individual.");
  
  message.channel.send(intimembed);
  

}

module.exports.help = {
    name: "trespassing"
}
