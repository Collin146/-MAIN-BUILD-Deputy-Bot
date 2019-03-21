const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "maintenance"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Construction And Maintenance Code Violation (13)06 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "5 Minutes in prison.")
    .addField("Information", "A person who enters a clearly designated construction or facility maintenance site without the authority or purpose to be there. A person who enters a clearly designated road works site without the authority or purpose to be there.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Construction And Maintenance Code Violation\' type: !construction and maintenance violation");

}

module.exports.help = {
    name: "construction"
}
