const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "court"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Contempt of Court (4)03 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who willfully disobeys the verbal or written order of a court authority, disrespects the decorum of the court, or otherwise infringes upon due process. This charge can only be issued by a Judge or agent of a court.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Contempt of Court\' type: !contempt of court.")

}

module.exports.help = {
    name: "contempt"
}
