const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "witness"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Dissuading A Witness Or Victim (4)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "A person who knowingly and maliciously prevents or encourages any witness or victim from attending or giving testimony at any trial, proceeding, or inquiry authorized by law with the use of bribery, fear, or other tactics. A person who prevents the distribution, completion, answering, or due process of an affidavit or other legal statement.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Dissuading A Witness Or Victim\' type: !dissuading a witness or victim.")

}

module.exports.help = {
    name: "dissuading"
}
