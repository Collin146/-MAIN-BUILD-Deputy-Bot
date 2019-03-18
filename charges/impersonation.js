const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "government"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Impersonation Of A Government Employee (4)10 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who pretends or implies the role of a government worker, such as a peace officer, paramedic, tax collector, federal investigator, or other official. A person who wears an official or realistic government employee uniform with an official or realistic badge or identification tag except on an official, legally sanctioned movie or production set. A person who claims to be a government worker in order to deceive or take advantage of another individual or organization");
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Impersonation Of A Government Employee\' type: !impersonation of a government employee")

}

module.exports.help = {
    name: "impersonation"
}
