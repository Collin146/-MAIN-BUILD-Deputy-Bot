const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "riot"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Incitement To Riot (5)03 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison.")
.addField("Information", "A person whose actions deliberately agitates or intends to agitate a crowd or large group of people organized or located peacefully in a public or private area in order to promote acts of violence or civil unrest. A group of people who could be reasonably identified by a peace officer to be gang members whose actions in a public area intend to incite violence, encourage mayhem, or promote civil unrest.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Incitement To Riot\' type: !incitement to riot")

}

module.exports.help = {
    name: "incitement"
}
