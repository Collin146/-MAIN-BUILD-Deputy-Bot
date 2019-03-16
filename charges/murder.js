const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**Murder (1)09 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "12 Minutes in prison.")
.addField("Information", "Murder is defined clearly by a person’s premeditated forethought or plan to commit the murder. Manslaughter happens in a heat of passion, by criminal negligence or accident, or for some other incident that is not expected. The only exception to this is when someone commits a planned felony, such as planning to commit an arson. If someone dies as a result of the premeditated arson, it is no longer manslaughter and instead murder.");

message.channel.send(intimembed);

}

module.exports.help = {
    name: "murder"
}
