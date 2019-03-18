const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[2] === "duty"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Corruption Of Public Duty (4)22 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "6 Minutes in prison")
  .addField("Information", "A government employee who acts outside the interests of the public good or public justice. A government employee who demonstrates criminal negligence in their duties. A government employee convicted by the Department of Justice for committing a felony while on duty.");

  message.channel.send(argembed);

  return; 
  }

  if(args[2] === "office"){

    let arg2embed = new Discord.RichEmbed()
      .setTitle("**Corruption Of Public Office (4)23 Info**")
      .setColor("BLACK")
      .addField("Type of Punishment", "Felony")
      .addField("Punishment(s)", "7 Minutes in prison")
      .addField("Information", "A person who acts outside the interests of the public good, public justice, or duties of those in public office.");
    
      message.channel.send(arg2embed);
    
      return; 
      }

message.reply("If you are looking for \'Corruption Of Public Duty\' type: !corruption of public duty. If you are looking for \'Corruption Of Public Office\' type: !corruption of public office");

}

module.exports.help = {
    name: "corruption"
}
