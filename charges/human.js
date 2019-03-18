const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "trafficking"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Human Trafficking (4)17 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "8 Minutes in prison")
  .addField("Information", "A person who intentionally smuggles non-citizens into the state without proper visas and authorization. A person who intentionally restricts another’s liberty with intent for forced labor or sex trafficking, or other forced activities. This charge does not stack with (1)10. Kidnapping");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Human Trafficking\' type: !human trafficking");

}

module.exports.help = {
    name: "human"
}
