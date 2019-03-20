const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Entrapment (12)05 Info**")
    .setColor("BLACK")
    .addField("Information", "A person who would not have committed an offense if not for for the harassment, threats, or coercion to do so by members of law enforcement cannot be found guilty of the offense that they were persuaded to commit.");
    
    message.channel.send(intim2embed);
    
}

module.exports.help = {
    name: "entrapment"
}
