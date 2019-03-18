const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[2] === "government"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Misuse Of A Government Hotline (4)18 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Misdemeanor")
  .addField("Punishment(s)", "1 Minute in prison")
  .addField("Information", "A person who uses an emergency government hotline for any purpose other than an emergency situation which involves a life-or-death request for assistance or other purposes dictated by the hotline managers. A person who uses any non-emergency or public hotline for purposes irrelevant to that particular government office, department, or agency. A person who performs prank calls, fake calls, or tries to incite mayhem through public government lines");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Misuse Of A Government Hotline\' type: !misuse of a government hotline");

}

module.exports.help = {
    name: "misuse"
}
