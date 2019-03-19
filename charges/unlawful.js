const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "assembly"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Unlawful Assembly (5)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who refuses to leave public property after being ordered to do so by its state agency property manager or a peace officer. A person who refuses to leave the scene of a crime or other area after being ordered to so whose presence could hinder police operations. A group that fails to protest or demonstrate peacefully in a designated “free speech zone” or without proper permits or authorization from the city. A person who refuses to leave private property they were invited to access after being instructed to do so by the property owner or manager. This charge cannot stack with Trespassing of any kind.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Unlawful Assembly\' type: !unlawful assembly")

}

module.exports.help = {
    name: "unlawful"
}
