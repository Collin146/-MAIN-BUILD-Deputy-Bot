const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "government"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Obstruction Of A Government Employee (4)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "2 Minutes in prison.")
    .addField("Information", "A government employee would need to contact a peace officer to get the charge of Obstruction issued.");
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Obstruction Of A Government Employee\' type: !obstruction of a government employee")

}

module.exports.help = {
    name: "obstruction"
}
