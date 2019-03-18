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

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Escape (4)14 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "6 Minutes in prison.")
    .addField("Information", "Any person arrested, booked, charged, or convicted of any crime who thereafter escapes from a county or city jail, prison, community service, or custody of a Correctional or Parole Officer.");
    message.channel.send(intim2embed);

}

module.exports.help = {
    name: "escape"
}
