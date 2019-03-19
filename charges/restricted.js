const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "airspace"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Restricted Airspace Violation (8)13 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "7 Minutes in prison")
  .addField("Information", "A person who enters the restricted airspace as detailed in Section 4 of the State Aviation Act Of 2015 and refuses to leave such airspace after being ordered to leave such airspace.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Restricted Airspace Violation\' type: !restricted airspace violation");

  

}

module.exports.help = {
    name: "restricted"
}
