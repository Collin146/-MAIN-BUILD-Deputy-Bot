const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[0] === "over"){

        let intim2embed = new Discord.RichEmbed()
        .setTitle("**Speeding Over 100 MPH (11.5)09 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$880 & License Suspension For 7 Days");
        
        message.channel.send(intim2embed);
        
        return;
        }

if(args[0] === "1-15"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Speeding 1-15 MPH Over (11.5)10 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Infraction")
.addField("Punishment(s)", "$280");

message.channel.send(intimembed);

return;
}

if(args[0] === "16-25"){

    let intim3embed = new Discord.RichEmbed()
    .setTitle("**Speeding 16-25 MPH Over (11.5)11 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Infraction")
    .addField("Punishment(s)", "$360");
    
    message.channel.send(intim3embed);
    
    return;
    }

    if(args[0] === "26+"){

        let intim4embed = new Discord.RichEmbed()
        .setTitle("**Speeding 26+ (11.5)12 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$480");
        
        message.channel.send(intim4embed);
        
        return;
        }

let helpembed = new Discord.RichEmbed()
.setTitle("**Search Results**")
.addField("Speeding Over 100 MPH", "!speeding over 100 mph")
.addField("Speeding 1-15 MPH Over", "!speeding 1-15 mph over")
.addField("Speeding 16-25 MPH Over", "!speeding 16-25 mph over")
.addField("Speeding 26+", "!speeding 26+");

message.channel.send(helpembed);

}

module.exports.help = {
    name: "speeding"
}
