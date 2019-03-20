const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Duress (12)06 Info**")
    .setColor("BLACK")
    .addField("Information", "A person who commits any offense in response to immediate threats to kill from a third party and does so in order to negate those threats cannot be found to have had the required criminal intent with which to be held liable for an offense. The only exception to this are severe crimes against the person, such as torture, murder, and attempted murder, as it is not justifiable to take or severely harm another life unless in an act of self defense.");
    
    message.channel.send(intim2embed);
    
}

module.exports.help = {
    name: "duress"
}
