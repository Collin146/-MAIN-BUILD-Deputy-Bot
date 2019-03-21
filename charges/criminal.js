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
    

message.reply("If you are looking for \'Criminal Accomplice Clause\' type: !criminal accomplice clause. If you are looking for \'Criminal Fines\' type: !criminal fines.");

}

module.exports.help = {
    name: "criminal"
}
