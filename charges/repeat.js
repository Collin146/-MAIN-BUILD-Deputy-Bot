const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "offender"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Repeat Offender Clause (12)17 Info**")
  .setColor("BLACK")
  .addField("Information", "The District Attorney's Office, a representative of the Governor's Office, or a judge may charge a person who's arrested for at least one felony or misdemeanor, who has been previously convicted of at least one felony or misdemeanor, with this clause, which will increase the time due by one-hundred percent (100%) for the repeat offender. A judge may issue an indefinite suspension to any license under the repeat offender clause when it has been demonstrated that the person is likely not to cease committing the offense in the future. A judge may order the indefinite seizure of any vehicle used in the commission of the crime when it has been demonstrated that an individual is unlikely to cease committing the offense in the future and such vehicle was used in the commission of the crime.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Repeat Offender Clause\' type: !repeat offender clause.");

}

module.exports.help = {
    name: "repeat"
}
