const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "controlled"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Manufacture Of A Controlled Substance (6)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "8 Minutes in prison.")
.addField("Information", "A person who, except as otherwise provided by law, manufactures, compounds, converts, produces, or prepares, either directly or indirectly by chemical or natural extraction, any illegal substance.");

message.channel.send(intimembed);

return;
}

if(args[1] === "possession"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Manufacture Or Possession Of An Improvised Device (9)07 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "6 Minutes in prison.")
    .addField("Information", "Except as otherwise provided by law, A civilian who manufactures, assembles, disassembles, or possesses parts of any dangerous weapon, explosive, trap, firearm, blade or other destructive device that does not apply or is appropriate to any other penal code entries. This may only be charged against person(s) when it can be proven an individual manufactured improvised blade(s), for example: in a prison environment, otherwise (9)01. Possession Of An Illegal Blade is to be used if an individual is found with an improvised blade. This code entry cannot stack with any other Title 9. Control of Deadly Weapons And Equipment charges.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Manufacture Of A Controlled Substance\' type: !manufacture of a controlled substance. If you are looking for \'Manufacture Or Possession Of An Improvised Device\' type: !manufacture or possession of an improvised device.");

}

module.exports.help = {
    name: "manufacture"
}
