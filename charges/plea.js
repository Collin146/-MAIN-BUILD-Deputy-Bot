const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "bargaining"){    

let intimembed = new Discord.RichEmbed()
.setTitle("**Plea Bargaining / Police Compliance Clause (10)05 Info**")
.setColor("BLACK")
.addField("Information", "If a person, at the request of the District Attorney’s Office, or by other legal authorities within the State of San Andreas, complies to assistance in other activities sufficient to assist with the apprehension or prevention of criminals or crime in San Andreas, then that individual is permitted to receive bargains or other commutes to sentences and punishments issued. The specific amount of a sentence commute are subject to the circumstances of each situation of Plea Bargain or Police Compliance, at the discretion of the judge reviewing the case.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Plea Bargaining / Police Compliance Clause\' type: !plea bargainig / police compliance clause");

}

module.exports.help = {
    name: "plea"
}
