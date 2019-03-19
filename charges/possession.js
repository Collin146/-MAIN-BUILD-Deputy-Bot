const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[4] === "with"){

    let arg3embed = new Discord.RichEmbed()
      .setTitle("**Possession Of A Controlled Substance With Intent To Sell (6)02 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Felony")
      .addField("Punishment(s)", "4 Minutes in prison")
      .addField("Information", "A person in possession of a controlled substance or multiple controlled substances in an amount of over one ounce (28 grams).");
    
      message.channel.send(arg3embed);
    
      return; 
      }

      if(args[2] === "drug"){

        let arg4embed = new Discord.RichEmbed()
          .setTitle("**Possession Of Drug Paraphernalia (6)03 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Infraction")
          .addField("Punishment(s)", "$780")
          .addField("Information", "A person who willingly possesses a device or mechanism used exclusively for the processing or consumption of an illegal controlled substance.");
        
          message.channel.send(arg4embed);
        
          return; 
          }

  if(args[2] === "controlled"){

    let arg2embed = new Discord.RichEmbed()
      .setTitle("**Possession Of A Controlled Substance (6)01 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Misdemeanor")
      .addField("Punishment(s)", "3 Minutes in prison")
      .addField("Information", "A person who possesses any controlled substance, except when the substance has been lawfully prescribed to them by a licensed practitioner of medicine or is legally available without a prescription.");
    
      message.channel.send(arg2embed);
    
      return; 
      }

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
