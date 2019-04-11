const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "defense,"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Private Defense, Self Defense, Castle Doctrine, And Denfense Of Others (12)03 Info**")
    .setColor("BLACK")
    .addField("Information", "A person who has a reasonable belief that they, or another, are in imminent danger of being killed, seriously injured or unlawfully touched and believe that imminent force is needed to prevent that danger and use no more force than is necessary to negate that danger will absolved of criminal liability in Title 1. Crimes Against the Person. ALL these requirements must be met to be completely absolved of criminal liability. If not all requirements are met, charges may instead be reduced to up to half the minimum sentence for relevant offenses at the discretion of the peace officer or a judge. This also applies in the case of a person who is protecting their home from imminent danger or robbery when on private property. This defense cannot be applied in cases of gang on gang violence or in other such instances where the party claiming the defense was put at risk of immediate danger by their own involvement with actionable criminality.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Private Defense, Self Defense, Castle Doctrine, And Denfense Of Others\' type: !private defense, self defense, castle doctrine, and defense of others.");

}

module.exports.help = {
    name: "private"
}
