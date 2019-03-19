const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "intoxication"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Public Intoxication (6)08 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who is found in any public place under the influence of intoxicating liquor.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Public Intoxication\' type: !public intoxication.")

}

module.exports.help = {
    name: "public"
}
