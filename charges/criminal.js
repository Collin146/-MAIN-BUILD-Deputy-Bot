const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "accomplice"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Criminal Accomplice Clause (10)07 Info**")
  .setColor("BLACK")
  .addField("Information", "A person who acts as an accomplice, aid, adviser, or other supportive role to another person's attempted or successful criminal acts shall receive HALF the punishment allotted to the person who attempted or successful criminal acts.");

  message.channel.send(argembed);

  return; 
  }

  if(args[0] === "fines"){

    let argembed = new Discord.RichEmbed()
      .setTitle("**Criminal Fines (12)16 Info**")
      .setColor("BLACK")
      .addField("Information", "The Department of Justice may seek Criminal Fines through the State of San Andreas Court, to accompany imprisonment, for all felony and misdemeanor charges. The court shall impose a fine in all cases, except where the defendant establishes that he is unable to pay and is not likely to become able to pay any fine. A person who articulates and furnishes financial documentation to indicate financial difficulties with paying the fine shall be afforded additional time to pay the fine through a deadline established by the courts or through a payment plan to the Department of Justice. The fines may stack. ");
    
      message.channel.send(argembed);
    
      return; 
      }
    
      if(args[0] === "fire"){

        let argembed = new Discord.RichEmbed()
          .setTitle("**Criminal Fire Code Violation (13)07 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Misdemeanor")
          .addField("Punishment(s)", "4 Minutes in prison")
          .addField("Information", "A facility manager or property owner who, through willful ignorance, criminal negligence, or intentional ignorance of a fire marshal violates a provision of the Fire Code and fails to amend that violation in a timely manner. A person who disrupts, removes, defaces, or affects any official postings or notices issued by a fire marshal.");
        
          message.channel.send(argembed);
        
          return; 
          }

          if(args[0] === "business"){

            let argembed = new Discord.RichEmbed()
              .setTitle("**Criminal Business Operations (13)10 Info**")
              .setColor("BLACK")
              .addField("Type of Punishment", "Misdemeanor")
              .addField("Punishment(s)", "3 Minutes in prison")
              .addField("Information", "Any person who willfully fails to pay a fine issued and notified by the Bureau of Licensing within seven days without a lawful excuse, even if the fine is paid in full after that time is guilty of a misdemeanor. Those convicted under this section shall be punished by imprisonment for 45 minutes and the appropriation of all due fines. This charge is issued in lieu of (4)02. Failure To Pay A Fine when the fine is related to the Bureau of Licensing and exceeds the seven day payment period.");
            
              message.channel.send(argembed);
            
              return; 
              }

message.reply("If you are looking for \'Criminal Accomplice Clause\' type: !criminal accomplice clause. If you are looking for \'Criminal Fines\' type: !criminal fines. If you are looking for \'Criminal Fire Code Violation\' type: !criminal fire code violation. If you are looking for \'Criminal Business Operations\' type: !criminal business operations.");

}

module.exports.help = {
    name: "criminal"
}
