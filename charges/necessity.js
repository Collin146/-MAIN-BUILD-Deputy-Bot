const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Necessity (12)04 Info**")
    .setColor("BLACK")
    .addField("Information", "A person who commits an offense out of necessity to protect themselves or others from significant bodily harm or emergency, has no adequate legal alternative, did not create a greater danger through their actions and held an actual and reasonable belief that their action was necessary to prevent harm, will be absolved of criminal liability for the offense deemed to be committed as a necessity to prevent greater harm. This defense cannot be applied in cases of gang on gang violence or in other such instances where the party claiming the defense was put at risk of immediate danger by their own involvement with actionable criminality.");
    
    message.channel.send(intim2embed);
    
}

module.exports.help = {
    name: "necessity"
}
