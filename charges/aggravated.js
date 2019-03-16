const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[0] === "battery"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Aggravated Battery (1)06 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "Aggravated Battery is the continued violence or battery against an individual, such as an ongoing fight or brawl, that doesn’t lead to severe bodily harm or life threatening injury.");

message.channel.send(intimembed);

return;
    }

message.reply("If you are looking for \'Aggravated Battery\' type: !aggravated battery.")

}

module.exports.help = {
    name: "aggravated"
}
