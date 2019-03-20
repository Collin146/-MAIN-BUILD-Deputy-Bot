const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[3] === "bicycle"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Unsafe Usage Of A Bicycle (11)12 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$764")
    .addField("Information", "A person's unsafe usage of a bicycle or other self-propelled vehicle that obstructs traffic, incites disorder, creates a hazard, or demonstrates the potential for harm.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Unsafe Usage Of A Bicycle\' type: !unsafe usage of a bicycle");

}

module.exports.help = {
    name: "unsafe"
}
