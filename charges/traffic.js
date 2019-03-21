const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if (args[5] === "green"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Traffic Signals - Responsibility At A Green Light (11.5)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$234")

message.channel.send(intimembed);

return;
}

if (args[5] === "red"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Traffic Signals - Responsibility At A Red Light (11.5)02 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$480")
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Traffic Signals - Responsibility At A Green Light\' type: !traffic signals - responsibility at a green light. If you are looking for \'Traffic Signals - Responsibility At A Red Light\' type: !traffic signals - responsibility at a red light.");

}

module.exports.help = {
    name: "traffic"
}
