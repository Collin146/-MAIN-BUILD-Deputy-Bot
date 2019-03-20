const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Soliciting (10)03 Info**")
.setColor("BLACK")
.addField("Information", "A person who solicits for the commission or perpetration of any crime shall be punished by the same punishment as if the offense was committed.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "soliciting"
}
