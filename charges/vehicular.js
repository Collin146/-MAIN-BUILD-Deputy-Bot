const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "murder"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Vehicular Murder (1)13 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "6 Minutes in prison & Suspended License for 7 Days.")
.addField("Information", "Vehicular Murder is only applicable if the individual driving the vehicle would have been reasonably aware of the fact that their driving, either due to its criminal intent (eluding police) or reckless nature, could feasibly cause great bodily injury or death to someone.");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Vehicular Murder\' type: !vehicular murder.")

}

module.exports.help = {
    name: "vehicular"
}
