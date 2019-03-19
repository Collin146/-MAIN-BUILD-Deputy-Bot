const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[3] === "off-road"){

        let arg2embed = new Discord.RichEmbed()
          .setTitle("**Reckless Operation Of An Off-Road Or Naval Vehicle (8)10 Info**")
          .setColor("BLACK")
          .addField("Type of Punishment", "Misdemeanor")
          .addField("Punishment(s)", "6 Minutes in prison")
          .addField("Information", "A person who demonstrates careless or general disregard for the safety of themselves or others while operating a naval vehicle or vehicle intended for off-road travel.");
        
          message.channel.send(arg2embed);
        
          return; 
          }

  if(args[0] === "operation"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Reckless Operation Of An Aircraft (8)09 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "8 Minutes in prison")
  .addField("Information", "A person who demonstrates careless or general disregard for the safety of themselves or others while operating an aircraft. A person who performs stunts or dangerous aeronautical maneuvers while over populated areas or while dangerously close to other aircraft. A person who fails to give appropriate distance or clearance to another aircraft in operation.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Reckess Operation Of An Aircraft\' type: !reckless operation of an aircraft. If you are looking for \'Reckess Operation Of An Off-Road Or Naval Vehicle\' type: !reckless operation of an off-road or naval vehicle");

}

module.exports.help = {
    name: "reckless"
}
