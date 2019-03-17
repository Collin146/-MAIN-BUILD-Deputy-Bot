const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "robbery"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Armed Robbery (2)07 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "7 Minutes in prison")
  .addField("Information", "A person who takes property from the possession of another against their will, by means of force facilitated with a weapon or with an item used as a weapon. This charge cannot stack with (2)06. Robbery.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Armed Robbery\' type: !armed robbery");

  

}

module.exports.help = {
    name: "armed"
}
