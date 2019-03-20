const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "intoxication"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Involuntary Intoxication (12)02 Info**")
    .setColor("BLACK")
    .addField("Information", "A person found to be involuntarily intoxicated, meaning they were evidently drugged or had their awareness impaired against their will or knowledge, cannot be found guilty of an offense as they did not have the adequate state of mind to do so.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Involuntary Intoxication' type: !involuntary intoxication.");

}

module.exports.help = {
    name: "involuntary"
}
