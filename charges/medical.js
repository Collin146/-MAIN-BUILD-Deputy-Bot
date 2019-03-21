const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "practice"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Medical Practice Violation (13)04 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "7 Minutes in prison.")
    .addField("Information", "A person who identifies themselves as possessing a license to practice advanced medicine, whether verbally, or through implied means, and who has not received proper training to do so from the Los Santos Fire Department. A person who performs or provides any medical services with criminal negligence, by criminal accident, or with the intent to cause harm to an individual. A person who performs or provides any medical services not licensed or permitted by the Los Santos Fire Department after being explicitly notified by the Los Santos Fire Department to discontinue services in the State of San Andreas. This charge cannot stack with (1).06 Attempted Murder.");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Medical Practice Violation\' type: !medical practice violation");

}

module.exports.help = {
    name: "medical"
}
