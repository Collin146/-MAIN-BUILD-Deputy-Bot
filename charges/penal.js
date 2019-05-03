const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(args[1] === "help"){

        let intimembed = new Discord.RichEmbed()
        .setTitle("**Penal Code Commands Help Menu**")
        .setColor("ffffff")
        .addField("!titles", "This shows all of the titles & the commands to see all of the charges of a specific title.")
        .addField("!title <number>", "This shows all of the charges which fall under the title number that is put in & the commands to see each specific charge.")
        .addField("!<charge>", "This shows the information about the charge that is put in.");
        
        message.channel.send(intimembed);
        
        return;
            }

            message.reply("If you were looking for the Penal Code Commands Help Menu type: !penal code help.");
}

module.exports.help = {
    name: "penal"
}
