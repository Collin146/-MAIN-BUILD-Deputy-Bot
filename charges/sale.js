const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[2] === "controlled"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Sale Of A Controlled Substance (6)06 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison.")
.addField("Information", "A person who sells, or offers to sell, a controlled substance to another person, regardless of whether or not they possess that controlled substance");

message.channel.send(intimembed);

return;
}

if(args[1] === "alcohol"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Sale Of Alcohol To A Minor (7)03 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person who willfully and knowingly sells alcohol to a minor under the age of 21.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Sale Of A Controlled Substance\' type: !sale of a controlled substance. If you are looking for \'Sale Of Alcohol To A Minor\' type: !sale of alcohol to a minor.");

}

module.exports.help = {
    name: "sale"
}
