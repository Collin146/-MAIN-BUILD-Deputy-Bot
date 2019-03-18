const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "imprisonment"){

let intimembed = new Discord.RichEmbed()
.setTitle("**False Imprisonment (1)10 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "False Imprisonment is when someone is held against their will for less than one hour, without any premeditated intent (such as a plan to kidnap someone) or when there is no intention to ransom the individual. Citizens arrest is a limited tool (defined elsewhere in the penal code) to hold individuals while awaiting police custody. Doing this unlawfully is considered a False Imprisonment.");

message.channel.send(intimembed);

return;
}

if(args[0] === "information"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**False Information To A Government Employee (4)06 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who provides false information or details to a peace officer during the course of a criminal investigation or lawful detainment. A person who provides false information or details to a government employee during the course of an investigation. A person who provides false information or details to a member of the Senate of the State of San Andreas during the course of an investigation or hearing. A person who provides false information or details against another person(s) in a police report or other legal document. This charge cannot stack with (4)08. Perjury.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'False Imprisonment\' type: !false imprisonment. If you are looking for \'False Information To A Government Employee\' type: !false information to a government employee.")

}

module.exports.help = {
    name: "false"
}
