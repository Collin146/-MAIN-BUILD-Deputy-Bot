const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[1] === "punishment"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Imprisonment & Punishment Criteria (12)11 Info**")
  .setColor("BLACK")
  .addField("Information (1/2)", "Only criminal violations that originate from the San Andreas Penal Code may carry a misdemeanor or felony-level punishment with imprisonment in a county or state penitentiary. All felonies must carry with their punishment imprisonment at the San Andreas State Correctional Facility. All persons convicted of more than 45 minutes imprisonment will carry their sentence at the San Andreas State Correctional Facility. All persons convicted of less than 30 minutes will carry their sentence at the appropriate county facility. All persons convicted of between 30 and 45 minutes will be imprisoned at the location of Officer Discretion. Each penal code entry may include a range of time for imprisonment. While some entries dictate instances where the maximum or minimum time of imprisonment must be used, in all other instances the peace officer issuing the arrest may use their discretion, based on severity,");

  message.channel.send(argembed);

let arg2embed = new Discord.RichEmbed()
.addField("Information (2/2)", "cooperativeness of the suspect, or other criteria to decide the time within The LSPD and LSSD may set internal policies to dictate how officers should follow Imprisonment & Punishment Criteria, so long as it does not violate the minimum and maximum punishment policies stated in this Penal Code. Each bullet number in a penal code entry refers to an applicable charge for each entry. Violating any one of the descriptions is a violation of the penal code entry. (( Persons who roleplay without a sound mind will still, in any case, be arrested and charged for the crime they commit. Technically they’d be delivered to an appropriate institution in-character but are dropped off to the local county or state jail before being sent there. They would not be placed with the regular prison population. ))")
.setFooter("Note: This was split up in two messages due to the max amount of words in a message.");

await message.channel.send(arg2embed);

  return; 
  }

  message.reply("If you are looking for \'Imprisonment & Punishment Criteria\' type: !imprisonment & punishment criteria");

}

module.exports.help = {
    name: "imprisonment"
}
