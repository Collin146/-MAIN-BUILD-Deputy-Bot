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

message.reply("If you are looking for \'Criminal Accomplice Clause\' type: !criminal accomplice clause");

}

module.exports.help = {
    name: "criminal"
}
