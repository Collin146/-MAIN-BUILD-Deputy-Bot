const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "breakout"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Prisoner Breakout (4)15 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "7 Minutes in prison")
  .addField("Information", "A person who directly aids or assists an inmate with escaping from the law, including the lawful custody of a peace officer, prisoner transport, parole, community service, or incarceration in a county jail or state prison. A person who provides information or insights that subsequently assist an inmate with escaping from the law.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Prisoner Breakout\' type: !prisoner breakout");

}

module.exports.help = {
    name: "prisoner"
}
