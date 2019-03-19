const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "abuse"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Animal Abuse / Cruelty (7)01 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "7 Minutes in prison")
  .addField("Information", "A person who intentionally maims, mutilates, tortures, wounds, or kills a living animal. A person whose neglect maims, mutilates, tortures, wounds, or kills a living animal. A person who owns a pet or animal that is not reasonably considered domesticated, safe, or healthy for the animal or the owner, without a proper permit.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Animal Abuse /  Cruelty\' type: !animal abuse / cruelty");

  

}

module.exports.help = {
    name: "animal"
}
