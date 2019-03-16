const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[0] === "with"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Assault With A Deadly Weapon (1)03 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Felony")
.addField("Punishment(s)", "4 Minutes in prison.")
.addField("Information", "Assault With A Deadly Weapon matches the description of Assault, but the perpetrator also has a weapon or tool being used to communicate or facilitate that violence or fear. See Assault for additional notes. Any act of Intimidation with a weapon is considered Assault With a Deadly Weapon, but they must be visibly seen for this to count.");

message.channel.send(intimembed);

    }
}

module.exports.help = {
    name: "assault with a deadly weapon"
}
