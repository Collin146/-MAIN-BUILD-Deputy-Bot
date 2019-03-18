const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "Complaint"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Filing A False Complaint (4)07 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who knowingly files a false complaint, statement, document, or representation with any organization regarding the conduct, job performance, or behavior of a public official or employee for the purpose of initiating false administrative action against that official.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Filing A False Complaint\' type: !filing a false complaint.")

}

module.exports.help = {
    name: "filing"
}
