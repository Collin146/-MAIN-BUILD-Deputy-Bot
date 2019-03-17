const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Prostitution (3)03 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison.")
.addField("Information", "Anyone who cannot be proven to commit prostitution may charged with Indecent Exposure or Lewd or Dissolute Conduct depending on the circumstances. The individual(s) performing the sexual acts in return for money, goods, services or other items of value are to be charged with prostitution.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "prostitution"
}
