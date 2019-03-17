const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "1"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Title 1 - Crimes Against The Person**")
.setDescription("These are all of the Title 1 charges & commands to get the information about them.")
.setColor("WHITE")
.addField("Intimidation", "!intimidation")
.addField("Assault", "!assault")
.addField("Assault With A Deadly Weapon", "!assault with a deadly weapon")
.addField("Mutual Combat", "!mutual combat")
.addField("Battery", "!battery")
.addField("Aggravated Battery", "!aggravated battery")
.addField("Attempted Murder", "!attempted murder")
.addField("Manslaughter", "!manslaughter")
.addField("Murder", "!murder")
.addField("False Imprisonment", "!false imprisonment")
.addField("Kidnapping", "!kidnapping")
.addField("Mayhem", "!mayhem")
.addField("Vehicular Murder", "!vehicular murder");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Attempted Murder\' type: !attempted murder.")

}

module.exports.help = {
    name: "title"
}
