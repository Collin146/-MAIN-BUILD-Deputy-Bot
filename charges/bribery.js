const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Bribery (4)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "A person who offers or gives a monetary gift, gratuity, valuable goods, or other reward to a public official, government employee, or peace officer in an attempt to influence their duties or actions. A person who gives services or nonmaterial, but valuable actions to a public official, government employee, or peace officer in an attempt to influence their duties or actions.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "bribery"
}
