const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[3] === "firearm"){

        let intimembed3 = new Discord.RichEmbed()
        .setTitle("**Grand Theft Of A Firearm (2)12 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "5 Minutes in prison.")
        .addField("Information", "Grand Theft Of A Firearm does stack with Theft.");
    
        message.channel.send(intimembed3);
    
        return;
    }
    

if(args[1] === "auto"){

    let intimembed2 = new Discord.RichEmbed()
    .setTitle("**Grand Theft Auto (2)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "6 Minutes in prison.")
    .addField("Information", "Grand Theft Auto does stack with theft, but not burglary or trespassing.");

    message.channel.send(intimembed2);

    return;
}

if(args[0] === "theft"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Grand Theft (2)10 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "4 Minutes in prison.")
    .addField("Information", "A person who steals or takes the personal property of another worth $10,000 or more.");
    
    message.channel.send(intimembed);
    
    return;
   
}
    
message.reply("If you are looking for \'Grand Theft\' type: !grand theft. If you are looking for \'Grand Theft Auto\' type: !grand theft auto. If you are looking for \'Grand Theft Of A Firearm\' type: !grand theft of a firearm.")

}

module.exports.help = {
    name: "grand"
}
