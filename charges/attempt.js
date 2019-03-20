const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Attempt (10)01 Info**")
.setColor("BLACK")
.addField("Information", "A person who attempts to commit any crime, but fails or is prevented or intercepted in its perpetration, shall be given the same punishment as if the offense was committed.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "attempt"
}
