const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "controlled"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Manufacture Of A Controlled Substance (6)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "8 Minutes in prison.")
.addField("Information", "A person who, except as otherwise provided by law, manufactures, compounds, converts, produces, or prepares, either directly or indirectly by chemical or natural extraction, any illegal substance.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Manufacture Of A Controlled Substance\' type: !manufacture of a controlled substance.");

}

module.exports.help = {
    name: "manufacture"
}
