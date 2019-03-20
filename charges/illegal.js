const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[3] === "aircraft"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Illegal Parking Of An Aircraft (11)16 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$230")
        .addField("Information", "A person who fails to follow the flight protocols as detailed in Section 5 of the State Aviation Act Of 2015");
        
        message.channel.send(intim3embed);
        
        return;
        }

if(args[0] === "nitrous"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Illegal Nitrous Oxide Possession (11)07 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "2 Minutes in prison.")
.addField("Information", "A person who drives a vehicle that contains, possesses, or shows characteristics of nitrous oxide equipment use while not on a official speedway or race track.");

message.channel.send(intimembed);

return;
}

if(args[0] === "usage"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Illegal Usage Of Hydraulics (11)08 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$850")
    .addField("Information", "A person driving a vehicle that uses hydraulic equipment while in motion or on a public street, road, or highway. This excludes vehicles with hydraulic equipment permitted exclusively for business and equipment purposes, such as a forklift in motion");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Illegal Nitrous Oxide Possession\' type: !illegal nitrous oxide possession. If you are looking for \'Illegal Usage Of Hydraulics\' type: !illegal usage of hydraulics. If you are looking for \'Illegal Parking Of An Aircraft\' type: !illegal parking of an aircraft.")

}

module.exports.help = {
    name: "illegal"
}
