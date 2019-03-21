const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "evasion"){

    let intimembed = new Discord.RichEmbed()
    .setTitle("**Tax Evasion (13)01 Info**")
    .setColor("BLACK")
    .addField("Type of Punishment", "Felony")
    .addField("Punishment(s)", "6 Minutes in prison.")
    .addField("Information", "A person, officer, or employee of an organization that fails to pay any appropriate fees or taxes liened against themselves or an agency they are an executive to. A person who intentionally avoids or attempts to avoid tax or fee payments to the state. This does not apply for fees that would fall under (4)02. Failure To Pay A Fine. This charge may only be authorized by the Attorney General or a warrant by a Judge. ");
    
    message.channel.send(intimembed);
    
    return;
    }

message.reply("If you are looking for \'Tax Evasion\' type: !tax evasion");

}

module.exports.help = {
    name: "tax"
}
