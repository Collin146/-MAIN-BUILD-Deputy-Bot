const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "controlled"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Sale Of A Controlled Substance (6)06 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "A person who sells, or offers to sell, a controlled substance to another person, regardless of whether or not they possess that controlled substance");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Sale Of A Controlled Substance\' type: !sale of a controlled substance.");

}

module.exports.help = {
    name: "sale"
}
