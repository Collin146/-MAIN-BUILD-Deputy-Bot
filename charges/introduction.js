const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "contraband"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Introduction Of Contraband (4)19 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "5 Minutes in prison")
  .addField("Information", "A person who provides contraband to an inmate of a correctional facility, or attempts to enter a facility with the intent to illegally transport contraband within it.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Introduction Of Contraband\' type: !introduction of contraband");

}

module.exports.help = {
    name: "introduction"
}
