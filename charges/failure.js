const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[3] === "flight"){

        let intim4embed = new Discord.RichEmbed()
        .setTitle("**Failure To Adhere To Flight Protocols (8)12 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "5 Minutes in prison.")
        .addField("Information", "A person who failures to follow the flight protocols as detailed in Section 3. of the State Aviation Act Of 2015.");
        
        message.channel.send(intim4embed);
        
        return;
        }

    if(args[3] === "atc"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Failure To Adhere To ATC Protocols (8)11 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "4 Minutes in prison.")
        .addField("Information", "A person who failures to respond to identification requests from nearby aircraft or Air Traffic Control.");
        
        message.channel.send(intim3embed);
        
        return;
        }

if(args[1] === "pay"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Failure To Pay A Fine (4)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Arrest warrant applications for this charge can only be filed by the officer who issued the fine the person failed to pay, or by a Sergeant within their department. However, any officer may perform an arrest regardless of whether a warrant has been issued for this charge if they encounter an individual with an unpaid fine.");

message.channel.send(intimembed);

return;
}

if(args[1] === "identify"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Failure To Identify To A Peace Officer (4)09 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "As per (12)11. Maximum Imprisonment someone who fails to identify and provide a way to properly charge them will be imprisoned 900 minutes until they identify themselves, after which this charge, plus all applicable charges, can be placed on their record and their sentence adjusted.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Failure To Pay A Fine\' type: !failure to pay a fine. If you are looking for \'Failure To Identify To A Peace Officer\' type: !failure to identify to a peace officer. If you are looking for \'Failure To Adhere ATC Protocols\' type: !failure to adhere atc protocols. If you are looking for \'Failure To Adhere Flight Protocols\' type: !failure to adhere flight protocols.")

}

module.exports.help = {
    name: "failure"
}
