const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[4] === "aircraft"){

        let intim5embed = new Discord.RichEmbed()
        .setTitle("**Evading A Peace Officer --- Aircraft (8)06 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "9 Minutes in prison")
        .addField("Information", "A person who, while operating or being in an aircraft, wilfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to land or stop.");
        
        message.channel.send(intim5embed);
        
        return;
        }

    if(args[4] === "naval"){

        let intim4embed = new Discord.RichEmbed()
        .setTitle("**Evading A Peace Officer --- Naval Vessel (8)05 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "5 Minutes in prison & $1,000")
        .addField("Information", "A person who, while operating or being in a naval vessel, wilfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to stop.");
        
        message.channel.send(intim4embed);
        
        return;
        }

    if(args[4] === "oversized"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Evading A Peace Officer --- Oversized Vehicle (8)04 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "6 Minutes in prison & $1,000")
        .addField("Information", "A person who, while operating or being in an oversized land vehicle, wilfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.");
        
        message.channel.send(intim3embed);
        
        return;
        }

    if(args[4] === "high"){

        let intim2embed = new Discord.RichEmbed()
        .setTitle("**Evading A Peace Officer --- High Performance Vehicle (8)03 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "6 Minutes in prison & $1,000")
        .addField("Information", "A person who, while operating or being in a high performance land vehicle, wilfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.");
        
        message.channel.send(intim2embed);
        
        return;
        }

if(args[1] === "peace"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Evading A Peace Officer (8)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "5 Minutes in prison & $1,000")
.addField("Information", "A person who, while operating or being in a vehicle on land, or while operating a bicycle, wilfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Evading A Peace Officer\' type: !evading a peace officer. If you are looking for \'Evading A Peace Officer --- High Performance Vehicle\' type: !evading a peace officer --- high performance vehicle. If you are looking for \'Evading A Peace Officer --- Oversized Vehicle\' type: !evading a peace officer --- oversized vehicle. If you are looking for \'Evading A Peace Officer ---  Naval Vessel\' type: !evading a peace officer --- naval vessel. If you are looking for \'Evading A Peace Officer --- Aircraft\' type: !evading a peace officer --- aircraft.")

}

module.exports.help = {
    name: "evading"
}
