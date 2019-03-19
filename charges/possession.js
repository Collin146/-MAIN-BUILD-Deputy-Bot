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

      if(args[2] === "open"){

        let arg5embed = new Discord.RichEmbed()
          .setTitle("**Possession Of An Open Container (6)07 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Infraction")
          .addField("Punishment(s)", "$650")
          .addField("Information", "A person who possesses an visible and open container of alcohol in a public place or in a motor vehicle.");
        
          message.channel.send(arg5embed);
        
          return; 
          }

      if(args[1] === "drug"){

        let arg4embed = new Discord.RichEmbed()
          .setTitle("**Possession Of Drug Paraphernalia (6)03 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Infraction")
          .addField("Punishment(s)", "$780")
          .addField("Information", "A person who willingly possesses a device or mechanism used exclusively for the processing or consumption of an illegal controlled substance.");
        
          message.channel.send(arg4embed);
        
          return; 
          }

          if(args[1] === "marijuana"){

            let arg5embed = new Discord.RichEmbed()
              .setTitle("**Possession Of Marijuana (6)11 Info**")
              .setColor("BLACK")
              .addField("Type of Punishment", "Infraction")
              .addField("Punishment(s)", "$950")
              .addField("Information", "A person who is found to be in posession of Marijuana shall be charged with one of the three offences depending on the amount listed below: 6.0 grams or less - (6)12 Posession of Marijuana, Between 7.0 grams to 27.0 grams - (6)01 Possession of Controlled Substance. 28.0 grams and more - (6)02 Posession of a Controlled Substance with Intent to Sell.");
            
              message.channel.send(arg5embed);
            
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

  if(args[1] === "child"){

    let argem5bed = new Discord.RichEmbed()
      .setTitle("**Possession Of Child Pornography (7)05 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Felony")
      .addField("Punishment(s)", "8 Minutes in prison")
      .addField("Information", "Every person who knowingly possesses imagery, film, video, storage devices that hold content of a person under the age of 18 engaging or simulating sexual conduct.");
    
      message.channel.send(argem5bed);
    
      return; 
      }
//Possession Of Drug Paraphernalia
//Possession Of A Controlled Substance With Intent To Sell
  message.reply("If you are looking for \'Possession of Burglary Tools\' type: !possession of burglary tools. If you are looking for \'Possession Of A Controlled Substance With Intent To Sell\' type: !possession of a controlled substance with intent to sell. If you are looking for \'Possession Of Drug Paraphernalia\' type: !possession of drug paraphernalia. If you are looking for \'Possession of Marjiuana \' type: !possession of marijuana. If you are looking for \'Possession Of Child Pornography\' type: !possession of child pornography.");

}

module.exports.help = {
    name: "possession"
}
