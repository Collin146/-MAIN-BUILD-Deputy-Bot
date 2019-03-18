const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "evidence"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Tampering With Evidence (4)16 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "A person who destroys or attempts to destroy, conceal, or alter any evidence that can later potentially be used in a criminal investigation or court proceeding.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Tampering With Evidence\' type: !tampering with evidence");

}

module.exports.help = {
    name: "tampering"
}
