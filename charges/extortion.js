const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Extortion (2)14 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "Extortion depends on a person or organization using its authority, power, or influence to intimidate and threaten someone in return for property or services. Property may be demanding money to keep quiet or demanding a certain personal payment to prevent a strike. Extortion may serve in lieu of corruption depending on the circumstances, or if it involves a private organization. A union threatening a strike or collective worker action is NOT extortion unless a specific leader or member is being paid to influence union operations.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "extortion"
}
