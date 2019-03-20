const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "exclusions"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Parole Exclusions (12)07 Info**")
  .setColor("BLACK")
  .addField("Information", "A person who is guilty of (1)12. Mayhem, (1)07. Kidnapping, (1)03. Attempted Murder with the Government Worker Clause, (1)08. Murder, (1)06. Manslaughter and (4)20. Violation of Parole Or Probation shall be always excluded from any opportunity of parole.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Parole Exclusions\' type: !parole exclusions");

}

module.exports.help = {
    name: "parole"
}
