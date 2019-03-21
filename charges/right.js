const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[2] === "emergancy"){

        let intim2embed = new Discord.RichEmbed()
        .setTitle("**Right Of Way Emergancy Vehicles (11.5)07 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$490");
        
        message.channel.send(intim2embed);
        
        return;
        }

if(args[1] === "way"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Right Of Way (11.5)06 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$234");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Right Of Way\' type: !right of way. If you are looking for \'Right Of Way Emergancy Vehicles\' type: !right of way emergancy vehicles.")

}

module.exports.help = {
    name: "right"
}
