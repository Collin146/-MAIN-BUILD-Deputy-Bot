const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "run"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Hit And Run (8)08 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "A person who hits another person or occupied vehicle and leaves the scene of the accident. A person involved in the accident who after being requested by another party involved in the accident fails to disclose their name, provide their license for observation for the purpose of identifying such person, or provides false and misleading information.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Hit And Run\' type: !hit and run");

}

module.exports.help = {
    name: "hit"
}
