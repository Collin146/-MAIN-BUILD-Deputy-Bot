const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "custody"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Escape From Custody (4)13 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "5 Minutes in prison.")
    .addField("Information", "A person who has been physically detained by use of restraints or physical force by a peace officer and escapes from said Peace Officer’s personal custody, resulting in a warrant or APB being needed to apprehend the suspect. Until a warrant or APB is placed, this incident is classified as (4)12. Resisting a Peace Officer. (( If a person quits during an arrest, they may be charged with Escape From Custody at admin discretion. ))");
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Escape From Custody\' type: !escape from custody");

}

module.exports.help = {
    name: "escape"
}
