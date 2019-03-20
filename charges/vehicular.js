const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[0] === "noise"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Vehicular Noise Violation (11)06 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Infraction")
        .addField("Punishment(s)", "$800")
        .addField("Information", "A driver whose vehicle emits excessive noise, creating a public nuisance. Examples include modifications to increase the noise pollution of their vehicle, or the excessive use of a vehicle horn or siren without justifiable purpose.");
        
        message.channel.send(intim3embed);
        
        return;
        }

    if(args[0] === "endangerment"){

        let intim2embed = new Discord.RichEmbed()
        .setTitle("**Vehicular Endangerment (11)05 Info**")
        .setColor("BLACK")
        .addField("Type of Punishment", "Misdemeanor")
        .addField("Punishment(s)", "3 Minutes in prison")
        .addField("Information", "A person who demonstrates extreme carelessness while operating a vehicle, such as by nearly striking pedestrians, entering pedestrian passageways or nearly causing the severe harm of other motorists. A person who uses their vehicle in any manner that is dangerous to passengers, pedestrians, or nearby residents. A person who drives upon railroad tracks, busy pedestrian passageways or plazas, or on the opposite lane of travel with vehicles present, or on the opposite lane of travel on any freeway or highway. Any activity that would be considered (11)05. Reckless Driving, but takes place within close proximity to nearby civilians, or in dense traffic. This cannot stack with (11)05. Reckless Driving.");
        
        message.channel.send(intim2embed);
        
        return;
        }

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

message.reply("If you are looking for \'Vehicular Murder\' type: !vehicular murder. If you are looking for \'Vehicular Endangerment\' type: !vehicular endangerment. If you are looking for \'Vehicular Noise Violation\' type: !vehicular noise violation.")

}

module.exports.help = {
    name: "vehicular"
}
