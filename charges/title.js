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

if(args[0] === "2"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Title 2 - Crimes Against Property And Criminal Profiteering**")
    .setDescription("These are all of the Title 2 charges & commands to get the information about them.")
    .setColor("ffffff")
    .addField("Arson (2)01", "!arson")
    .addField("Trespassing (2)02", "!trespassing")
    .addField("Trespassing within a Restricted Zone (2)03", "!trespassing within a restricted zone")
    .addField("Burglary (2)04", "!burglary")
    .addField("Possession Of Burglary Tools (2)05", "!possession of burglary tools")
    .addField("Robbery (2)06", "!robbery")
    .addField("Armed Robbery (2)07", "!armed robbery")
    .addField("Petty Theft (2)08", "!petty theft")
    .addField("Theft (2)09", "!theft")
    .addField("Grand Theft (2)10", "!grand theft")
    .addField("Grand Theft Auto (2)11", "!grand theft auto")
    .addField("Grand Theft Of A Firearm (2)12", "!grand theft of a firearm")
    .addField("Receiving Stolen Property (2)13", "!receiving stolen property")
    .addField("Extortion (2)14", "!extortion")
    .addField("Forgery (2)15", "!forgery")
    .addField("Fraud (2)16", "!fraud")
    .addField("Vandalism (2)17", "!vandalism");

    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for a title type: !title <title number>. Check: !titles to look up all of the title numbers.")

}

module.exports.help = {
    name: "title"
}
