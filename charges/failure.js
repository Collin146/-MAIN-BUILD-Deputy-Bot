const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[2] === "flight"){

        let intim4embed = new Discord.RichEmbed()
        .setTitle("**Failure To Adhere To Flight Protocols (8)12 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "5 Minutes in prison.")
        .addField("Information", "A person who failures to follow the flight protocols as detailed in Section 3. of the State Aviation Act Of 2015.");
        
        message.channel.send(intim4embed);
        
        return;
        }

    if(args[2] === "atc"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Failure To Adhere To ATC Protocols (8)11 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Felony")
        .addField("Punishment(s)", "4 Minutes in prison.")
        .addField("Information", "A person who failures to respond to identification requests from nearby aircraft or Air Traffic Control.");
        
        message.channel.send(intim3embed);
        
        return;
        }

        if(args[1] === "abide"){

            let intime3mbed = new Discord.RichEmbed()
            .setTitle("**Failure To Abide To A Traffic Control Device (11)01 Info**")
            .setColor("BLACK")
            .addField("Type of Punishment", "Infraction")
            .addField("Punishment(s)", "$950")
            .addField("Information", "A driver who fails to follow the instructions of a traffic control device, including: Fails to come to a FULL stop at “Stop Points”, noted as white or yellow lines at the edge of every intersection or with appropriate signage. Crossing a double yellow line when not enter or leaving a parking lot or private driveway. Ignoring clearly visible signage, whether permanent or temporary, used to direct or control traffic in any way. Ignoring the instruction or direction of a peace officer or construction worker at a road works site. A driver who fails to appropriately drive on the right properly with the flow of traffic, except in cases of emergency routes or private paths.");
            
            message.channel.send(intime3mbed);
            
            return;
            }

if(args[1] === "pay"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Failure To Pay A Fine (4)02 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "Misdemeanor")
.addField("Punishment(s)", "3 Minutes in prison.")
.addField("Information", "Arrest warrant applications for this charge can only be filed by the officer who issued the fine the person failed to pay, or by a Sergeant within their department. However, any officer may perform an arrest regardless of whether a warrant has been issued for this charge if they encounter an individual with an unpaid fine.");

message.channel.send(intimembed);

return;
}

if(args[1] === "identify"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Failure To Identify To A Peace Officer (4)09 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Misdemeanor")
    .addField("Punishment(s)", "3 Minutes in prison.")
    .addField("Information", "As per (12)11. Maximum Imprisonment someone who fails to identify and provide a way to properly charge them will be imprisoned 900 minutes until they identify themselves, after which this charge, plus all applicable charges, can be placed on their record and their sentence adjusted.");
    
    message.channel.send(intim2embed);
    
    return;
    }

message.reply("If you are looking for \'Failure To Adhere Flight Protocols\' type: !failure to adhere flight protocols.")

let helpembed = new Discord.RichEmbed()
.setTitle("**Search Results**")
.addField("Failure To Pay A Fine", "!failure to pay a fine")
.addField("Failure To Identify To A Peace Officer", "!failure to identify to a peace officer")
.addField("Failure To Adhere ATC Protocols", "!failure to adhere atc protocols")
.addField("Failure To Adhere Flight Protocols", "!failure to adhere flight protocols")
.addField("Failure To Abide A Traffic Control Device", "!failure to abide a traffic control device");

}

module.exports.help = {
    name: "failure"
}
