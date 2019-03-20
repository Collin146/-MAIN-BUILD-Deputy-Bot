const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "imprisonment"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Maximum Imprisonment (12)12 Info**")
  .setColor("BLACK")
  .addField("Information", "A person cannot be imprisoned for longer than 900 minutes despite the number of charges on this individual exceeding a 900 minute penalty, unless said sentence is approved by a Justice of the Courts of San Andreas, the Attorney General, or by the Governor of San Andreas. A person who cannot be effectively identified shall be imprisoned for 900 minutes until they can be properly identified or they fulfill the 900 minute imprisonment. If they are identified, the total time served will be deducted from the time due, with immediate release if they fulfilled more than the total time. A person released with more time spent in prison than their charges yield is not subject to excessive or wrongful imprisonment At the Governor’s discretion, an individual who commits a felony may qualify for death row status, yielding permanent imprisonment unless the Governor issues a pardon. ");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Maximum Imprisonment\' type: !maximum imprisonment");

}

module.exports.help = {
    name: "maximum"
}
