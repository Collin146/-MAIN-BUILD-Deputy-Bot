const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`kick.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !leave");
        return;
    }

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !leave");
        return;
    }

    message.guild.leave()

}

module.exports.help = {
    name: "leave"

}
