const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "1"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Title 1 - Crimes Against The Person**")
.setDescription("These are all of the Title 1 charges & commands to get the information about them.")
.setColor("ffffff")
.addField("Intimidation", "!intimidation", true)
.addField("Assault", "!assault", true)
.addField("Assault With A Deadly Weapon", "!assault with a deadly weapon", true)
.addField("Mutual Combat", "!mutual combat", true)
.addField("Battery", "!battery", true)
.addField("Aggravated Battery", "!aggravated battery", true)
.addField("Attempted Murder", "!attempted murder", true)
.addField("Manslaughter", "!manslaughter", true)
.addField("Murder", "!murder", true)
.addField("False Imprisonment", "!false imprisonment", true)
.addField("Kidnapping", "!kidnapping", true)
.addField("Mayhem", "!mayhem", true)
.addField("Vehicular Murder", "!vehicular murder", true);

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Attempted Murder\' type: !attempted murder.")

}

module.exports.help = {
    name: "title"
}
