const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Robbery (2)06 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison.")
.addField("Information", "Robbery stacks with any Title 1 crimes that are attempted during the Robbery. It cannot stack with Armed Robbery, which is when the force, intimidation, or fear involves a dangerous weapon.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "robbery"
}
