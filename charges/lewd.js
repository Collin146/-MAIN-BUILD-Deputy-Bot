const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "or"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Lewd Or Dissolute Conduct In Public (3)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "Lewd or Dissolute Conduct refers to actions that are not necessarily Indecent Exposure, but can presumably involve or lead to Indecent Exposure. Suggestive motions or gestures in bathroom stalls or other areas that are considered indecent but not naked or involve genitalia is Lewd Or Dissolute Conduct. This also applies for Indecent Exposure in areas like restrooms which involve your genitalia.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Lewd Or Dissolute Conduct In Public\' type: !lewd or dissolute conduct in public.")

}

module.exports.help = {
    name: "lewd"
}
