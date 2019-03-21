const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[2] === "right"){

        let intim5embed = new Discord.RichEmbed()
        .setTitle("**Driving On The Right Side (11.5)03 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$234")
        .addField("Information", "This accounts for driving into oncoming traffic, Not to be stacked with reckless driving.");
        
        message.channel.send(intim5embed);
        
        return;
        }

    if(args[2] === "influence"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Driving Under The Influence (DUI) (11)10 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "6 Minutes in prison & License Suspension For 5 Days.")
        .addField("Information", "A person who drives a vehicle or operates heavy machinery while under the influence of alcohol at or above the legal limit of 0.08 percent BAV");
        
        message.channel.send(intim3embed);
        
        return;
        }

if(args[2] === "suspended"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Driving With A Suspended License (8)01 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "A person who drives a vehicle, whether on land, sea, or in air, while having a suspended license or authorization.");

message.channel.send(intimembed);

return;
}

if(args[2] === "valid"){

    let intim5embed = new Discord.RichEmbed()
    .setTitle("**Driving Without A Valid License (11)14 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "A person operating a motor vehicle without carrying a valid driver's license. A person who refuses to show or provide a driver's license to a peace officer while operating a motor vehicle. A person operating a motor vehicle without a valid, unexpired permit or license. A person operating a motor vehicle under the age of 16.");
    
    message.channel.send(intim5embed);
    
    return;
    }

if(args[1] === "impaired"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Driving While Impaired (DWI) (11)09 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "2 Minutes in prison.")
    .addField("Information", "A person who drives a vehicle or operates heavy machinery while under the influence of alcohol below the legal limit of 0.08 percent BAV and also demonstrates an inability to safely operate their vehicle or equipment. A person who drives a vehicle or operates heavy machinery for commercial purposes while under the influence of alcohol at or above a 0.04 BAV. A person who drives or operates heavy machinery under the influence of awareness-altering drugs, regardless of whether those drugs are being used under a prescription, and also demonstrates an inability to safely operate their vehicle or equipment.");
    
    message.channel.send(intim2embed);
    
    return;
    }

    if(args[1] === "shoulder/emergancy"){

        let intim6embed = new Discord.RichEmbed()
        .setTitle("**Driving On Shoulder/Emergancy Lane (11.5)24 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$350");
        
        message.channel.send(intim6embed);
        
        return;
        }

let helpembed = new Discord.RichEmbed()
.setTitle("**Search Results**")
.addField("Driving With A Suspended License", "!driving with a suspended license")
.addField("Driving While Impaired", "!driving while impaired")
.addField("Driving Under The Influence", "!driving under the influence")
.addField("Driving Without A Valid License", "!driving without a valid license")
.addField("Driving On The Right Side (11.5)03", "!driving on the right side")
.addField("Driving On Shoulder/Emergancy Lane", "!driving on shoulder/emergancy lane");

message.channel.send(helpembed);

}

module.exports.help = {
    name: "driving"
}
