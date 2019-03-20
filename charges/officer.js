const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "discretion"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Officer Discretion (12)09 Info**")
  .setColor("BLACK")
  .addField("Information", "Law enforcement officers shall have the authority to use their discretion when issuing infractions or select misdemeanors. This discretion entitles the officer to choose to forego an infraction or misdemeanor penalty based on their personal judgement. Officers must choose to issue Officer Discretion and forego charging, not issue a fine or other punishment in lieu of the typical punishment. Officers cannot elect Officer Discretion if the independent victim, property owner, or affected party chooses to press charges on the perpetrator. Double Jeopardy still applies, meaning a senior officer cannot revoke Officer Discretion once it is issued unless it was issued in disregard for a party wishing to press charges. All misdemeanors that fall under Officer Discretion shall state as such in the sentencing portion of the charge.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Officer Discretion\' type: !officer discretion");

}

module.exports.help = {
    name: "officer"
}
