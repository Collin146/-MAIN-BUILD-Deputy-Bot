const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "cause"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Probable Cause & Plain View Policy (12)15 Info**")
  .setColor("BLACK")
  .addField("Information", "Peace officers have the power to seize and record evidence upon any event that is in their plain view so long as they have a legal reason to be where they’re located at the time. A person who gives a government employee permission to view or access a facility, equipment or other areas is permitting an officer to view a facility for probable cause or plain view evidence. Probable Cause does not have a specific definition, but refers to the ongoing premise that an officer’s “gut feeling” supported by plain view evidence (such as the smell of marijuana or other items) that would imply a probable situation of criminality and authorize a search based on that evidence. Probable Cause can be circumstantially contested in a court of law.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Probable Cause & Plain View Policy\' type: !probable cause & plain view policy");

}

module.exports.help = {
    name: "probable"
}
