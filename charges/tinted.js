const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "windows"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Tinted Windows (11)17 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Infraction")
  .addField("Punishment(s)", "$435")  
  .addField("Information", "Windshield: Non-reflective tint must not exceed the top 4 inches of the windshield. Front Side Windows: VLT% must allow 70% of light into the vehicle.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Tinted Windows\' type: !tinted windows");

}

module.exports.help = {
    name: "tinted"
}
