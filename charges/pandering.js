const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "pimping"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Pandering / Pimping (3)05 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "A person who solicits or advertises, aids or provides transport or supervises persons involved in prostitution and retains some or all of the money earned.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Pandering / Pimping\' type: !pandering / pimping")

  

}

module.exports.help = {
    name: "pandering"
}
