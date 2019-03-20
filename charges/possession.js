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

      if(args[2] === "prohibited"){

        let arg6embed = new Discord.RichEmbed()
          .setTitle("**Possession Of A Prohibited Weapon (9)01 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Misdemeanor")
          .addField("Punishment(s)", "3 Minutes in prison")
          .addField("Information", "A civilian who possesses any prohibited weapon that is illegal in possession or not considered part of any legal weapon type. Prohibited Weapons include; A blade or improvised blade over three inches in length that can be used as a cutting, slashing or stabbing weapon, whether or not concealed; Brass Knuckles of any variety capable of being worn on the fingers of the hand and used as an offensive weapon, whether or not concealed;Baton or Nightstick possessed without a PF, GC, or CCW issued by the LSPD Firearms Licensing Division, whether or not concealed.");
        
          message.channel.send(arg6embed);
        
          return; 
          }

          if(args[2] === "unlicensed"){

            let arg7embed = new Discord.RichEmbed()
              .setTitle("**Possession Of An Unlicensed Firearm (9)02 Info**")
              .setColor("BLACK")
              .addField("Type of Punishment", "Misdemeanor")
              .addField("Punishment(s)", "3 Minutes in prison")
              .addField("Information", "A civilian who carries a legal, but unlicensed weapon on their person, in their vehicle, place of business, or other facility without proper permits. A person who knowingly and willingly allows another person to carry a weapon on their person, in their vehicle, place of business, or other facility without proper permits.");
            
              message.channel.send(arg7embed);
            
              return; 
              }

              if(args[2] === "illegal"){

                let arg8embed = new Discord.RichEmbed()
                  .setTitle("**Possession Of An Illegal Firearm (9)03 Info**")
                  .setColor("BLACK")
                  .addField("Type of Punishment", "Felony")
                  .addField("Punishment(s)", "5 Minutes in prison")
                  .addField("Information", "A civilian who possesses any firearm that is illegal in possession or not considered part of any legal weapon type. A person who possesses a firearm that contains illegal modifications in its design including, but not limited to, fully automatic firearms, magazine extensions, and silencers.");
                
                  message.channel.send(arg8embed);
                
                  return; 
                  }

                  if(args[2] === "assault"){

                    let arg9embed = new Discord.RichEmbed()
                      .setTitle("**Possession Of An Assault Weapon (9)04 Info**")
                      .setColor("BLACK")
                      .addField("Type of Punishment", "Felony")
                      .addField("Punishment(s)", "6 Minutes in prison")
                      .addField("Information", "A civilian who possesses an illegal firearm which uses high-velocity, high-caliber, or specialized ammunition including, but not limited to, FMJ ammunition or HEIAP bullets.");
                    
                      message.channel.send(arg9embed);
                    
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

          if(args[2] === "explosive"){

            let arg9embed = new Discord.RichEmbed()
              .setTitle("**Possession Of An Explosive Device (9)06 Info**")
              .setColor("BLACK")
              .addField("Type of Punishment", "Felony")
              .addField("Punishment(s)", "8 Minutes in prison")
              .addField("Information", "A civilian who possesses any manufactured or improvised device or equipment which is made from explosive and/or highly flammable liquid, gas or solid materials.");
            
              message.channel.send(arg9embed);
            
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

  if(args[1] === "weaponry"){

    let arg10embed = new Discord.RichEmbed()
      .setTitle("**Possession Of Weaponry With Intent To Sell (9)08 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Felony")
      .addField("Punishment(s)", "7 Minutes in prison")
      .addField("Information", "A person who is in possession of more than 5 full weapons or weapon components in any combination or amount with the intent to distribute, deliver, or sell.");
    
      message.channel.send(arg10embed);
    
      return; 
      }

      if(args[2] === "devices"){

        let arg11embed = new Discord.RichEmbed()
          .setTitle("**Possession Of Explosice Devices With Intent To Sell (9)09 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Felony")
          .addField("Punishment(s)", "8 Minutes in prison")
          .addField("Information", "A person who is in possession of more than 3 explosive devices or explosive device materials in any combination with the intent to distribute, deliver, or sell.");
        
          message.channel.send(arg11embed);
        
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

let replyembed = new Discord.RichEmbed()
.setTitle("**Search Results**")
.addField("Possession Of Burglary Tools", "!possession of burglary tools")
.addField("Possession Of A Controlled Substance", "Possession of a controlled substance")
.addField("Possession Of A Controlled Substance With Intent To Sell", "!possession of a controlled substance with intent to sell")
.addField("Possession Of Drug Paraphernalia", "!possession of drug paraphernalia")
.addField("Possession Of Marijuana", "!possession of marijuana")
.addField("Possession Of Child Pornography", "!possession of child pornography")
.addField("Possession Of A Prohibited Weapon", "!possession of a prohibited weapon")
.addField("Possession Of An Unlicensed Firearm", "!possession of an unlicensed firearm")
.addField("Possession Of An Illegal Firearm", "!possession of an illegal firearm")
.addField("Possession Of An Assault Weapon", "!possession of an assault weapon")
.addField("Possession Of An Explosive Device", "!possession of an explosive device")
.addField("Possession Of Weaponry With Intent To Sell", "!possession of weaponry with intent to sell")
.addField("Possession Of Explosive Devices With Intent To Sell", "!possession of explosive devices with intent to sell")

message.channel.send(replyembed);

}

module.exports.help = {
    name: "possession"
}
