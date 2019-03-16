const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 
    
let intimembed = new Discord.RichEmbed()
.setTitle("**Assault (1)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Assault is defined by distance the threats occur. Someone a few feet away threatening to harm or kill you at any moment is assault. Intimidation is less severe as there’s a distance that someone can escape through, or that the perpetrator has more time to reconsider the threat. Any violent physical contact is considered to be battery, however grabbing someone during a threat may be either assault or battery, depending on intention and interpretation.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "assault"
}
