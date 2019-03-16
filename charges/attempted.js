const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "murder"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Attempted Murder (1)07 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "8 Minutes in prison.")
.addField("Information", "Attempted Murder is a catch-all for any action that leads to severe bodily harm. Its range in imprisonment is intended to account for when such severe harm is premeditated or accidental. For accidents and negligence there must be evidence of foul play, criminality in the instance, or some other factor beyond a truly accidental incident. For example, injuring someone while speeding or intoxicated.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Attempted Murder\' type: !attempted murder.")

}

module.exports.help = {
    name: "attempted"
}
