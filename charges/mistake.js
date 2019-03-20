const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[1] === "fact"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Mistake Of Fact (12)01 Info**")
    .setColor("BLACK")
    .addField("Information", "A person who commits an offense but claims, and can display proof, that they acted on the honestly held belief they were not violating the law or did not understand the law that was violated. This can only negate an offense if the offense requires mens rea, meaning a willful intention, knowing, or understanding that they are committing a crime. In any other cases, it may reduce the punishment for an offense at the discretion of the peace officer, or a judge when in a criminal suit.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Mistake Of Fact\' type: !mistake of fact.");

}

module.exports.help = {
    name: "mistake"
}
