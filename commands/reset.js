const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`reject.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !reject <user> <reason>");
        return;
    }
    
    const no = bot.emojis.get("700713478578634783");  
    let fetchchannel = message.guild.channels.find(x => x.name === 'session-voting');
    
    fetchchannel.fetchMessage("770020722445516880")
      .then(message => {
       message.edit(`${no} - Saturday`);
    });
    
        } catch(err) {
        catchErr(err)

    }

}

module.exports.help = {
    name: "reset"

}
