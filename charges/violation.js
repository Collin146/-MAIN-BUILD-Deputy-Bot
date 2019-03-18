const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "parole"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Violation Of Parole Or Probation (4)20 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "A person who willfully violates the terms of a probation or parole agreement.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Violation Of Parole Or Probation\' type: !violation of parole or probation");

}

module.exports.help = {
    name: "violation"
}
