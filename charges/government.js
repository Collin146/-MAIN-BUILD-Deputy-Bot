const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[0] === "worker"){    

let intimembed = new Discord.RichEmbed()
.setTitle("**Government Worker Clause (10)04 Info**")
.setColor("BLACK")
.addField("Information", "Any crime knowingly committed against a government worker or state agency employee, as defined by the State Constitution, shall punish the perpetrator with the maximum possible sentence allowed by that particular code entry, unless a judge orders a reduced sentence.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Government Worker Clause\' type: !government worker clause.");

}

module.exports.help = {
    name: "government"
}
