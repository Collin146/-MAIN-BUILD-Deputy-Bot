const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "post"){

let messagecont = args.slice(1).join(" ");

message.delete().catch();

const postimage = ("https://media.discordapp.net/attachments/511913643923996683/727158652888154163/image1.png")
    
    let postembed = new Discord.RichEmbed()
      .setTitle("**New Twotter Post**")
      .setColor("#0173ce")
      .setDescription(`${messagecont}`)
      .setImage(`${postimage}`);
      
  message.channel.send({postembed});


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
    name: "twotter"
}
