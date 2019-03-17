const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "burglary"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Possession of Burglary Tools (2)05 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Infraction")
  .addField("Punishment(s)", "$900")
  .addField("Information", "It must be demonstrated that the person has a certain combination of these tools or in an appropriate context that would assume their usage in burglary. Having a screwdriver is not punishable alone, but a screwdriver, along with a tension bar, is punishable.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Possession of Burglary Tools\' type: !possession of burglary tools")

  

}

module.exports.help = {
    name: "possession"
}
