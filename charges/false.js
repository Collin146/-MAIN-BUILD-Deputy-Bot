const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "imprisonment"){

let intimembed = new Discord.RichEmbed()
.setTitle("**False Imprisonment (1)10 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "False Imprisonment is when someone is held against their will for less than one hour, without any premeditated intent (such as a plan to kidnap someone) or when there is no intention to ransom the individual. Citizens arrest is a limited tool (defined elsewhere in the penal code) to hold individuals while awaiting police custody. Doing this unlawfully is considered a False Imprisonment.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'False Imprisonment\' type: !false imprisonment.")

}

module.exports.help = {
    name: "false"
}
