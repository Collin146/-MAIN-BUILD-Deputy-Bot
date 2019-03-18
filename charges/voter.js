const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "fraud"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Voter Fraud / Voter Pandering (4)21 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Felony")
  .addField("Punishment(s)", "4 Minutes in prison")
  .addField("Information", "An individual who dissuades or influences official voting outcomes through illicit, illegal, or unethical manners. An individual who commits the criminal offense of buying votes when he or she promises, offers, or gives to a person, directly or indirectly, an undue benefit, for the person or a third party or entity: in order that the person vote, refrain from voting, cast a void vote, cast his or her vote in favor of or against a particular person or proposal.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Voter Fraud / Voter Pandering\' type: !voter fraud / voter pandering");

}

module.exports.help = {
    name: "voter"
}
