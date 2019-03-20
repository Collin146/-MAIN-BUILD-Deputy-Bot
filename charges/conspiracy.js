const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Conspiracy (10)02 Info**")
.setColor("BLACK")
.addField("Information", "If two or more persons conspire to commit any crime, to falsely and maliciously to indict another for any crime, or to procure another to be charged or arrested for any crime, they shall be punished by the same punishment as if the offense was committed.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "conspiracy"
}
