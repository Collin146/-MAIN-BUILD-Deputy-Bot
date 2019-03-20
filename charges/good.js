const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "samaritan"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Good Samaritan Clause (12)10 Info**")
  .setColor("BLACK")
  .addField("Information", "Citizens may perform a legal Citizen’s Arrest when an individual has committed a misdemeanor or greater offense and the citizen wishes to restrain the individual until proper authorities can arrive to support, assist, or assess the situation. Citizens may, at the request of the government worker, may give their assistance with carrying out official government business, so long as it doesn’t extend beyond the powers, duties, responsibilities, and authorities of that government worker. Citizens may come to the aid of a government worker who is in duress or incapacitated during official government business to save or protect their life or assist informing official agents. ");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Good Samaritan Clause\' type: !good samarita clause");

}

module.exports.help = {
    name: "good"
}
