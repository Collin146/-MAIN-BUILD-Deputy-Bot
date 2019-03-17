const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "1"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Title 1 - Crimes Against The Person**")
.setDescription("These are all of the Title 1 charges & commands to get the information about them.")
.setColor("ffffff")
.addField("Intimidation (1)01", "!intimidation")
.addField("Assault (1)02", "!assault")
.addField("Assault With A Deadly Weapon (1)03", "!assault with a deadly weapon")
.addField("Mutual Combat (1)04", "!mutual combat")
.addField("Battery (1)05", "!battery")
.addField("Aggravated Battery (1)06", "!aggravated battery")
.addField("Attempted Murder (1)07", "!attempted murder")
.addField("Manslaughter (1)08", "!manslaughter")
.addField("Murder (1)09", "!murder")
.addField("False Imprisonment (1)10", "!false imprisonment")
.addField("Kidnapping (1)11", "!kidnapping")
.addField("Mayhem (1)12", "!mayhem")
.addField("Vehicular Murder (1)13", "!vehicular murder");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for a title type: !title <title number>. Check: !titles to look up all of the title numbers.")

}

module.exports.help = {
    name: "title"
}
