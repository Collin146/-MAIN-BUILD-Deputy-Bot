const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[2] === "influence"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Driving Under The Influence (DUI) (11)10 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "6 Minutes in prison & License Suspension For 5 Days.")
        .addField("Information", "A person who drives a vehicle or operates heavy machinery while under the influence of alcohol at or above the legal limit of 0.08 percent BAV");
        
        message.channel.send(intim3embed);
        
        return;
        }

if(args[2] === "suspended"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Driving With A Suspended License (8)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who drives a vehicle, whether on land, sea, or in air, while having a suspended license or authorization.");

message.channel.send(intimembed);

return;
}

if(args[1] === "impaired"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Driving While Impaired (DWI) (11)09 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "2 Minutes in prison.")
    .addField("Information", "A person who drives a vehicle or operates heavy machinery while under the influence of alcohol below the legal limit of 0.08 percent BAV and also demonstrates an inability to safely operate their vehicle or equipment. A person who drives a vehicle or operates heavy machinery for commercial purposes while under the influence of alcohol at or above a 0.04 BAV. A person who drives or operates heavy machinery under the influence of awareness-altering drugs, regardless of whether those drugs are being used under a prescription, and also demonstrates an inability to safely operate their vehicle or equipment.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Driving With A Suspended License\' type: !driving with a suspended license")

}

module.exports.help = {
    name: "driving"
}
