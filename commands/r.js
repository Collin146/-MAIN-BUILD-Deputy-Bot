const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("700843409526620180");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`r.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !r");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !r");
        return;
    }

    if (talkedRecently.has(message.author.id)) {

        let errEmbed2 = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`${no} **Error!**`)
        .setDescription(`Please wait until the 5 hour cooldown is over!`);
    
        message.channel.send(errEmbed2);
} else {


if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let mentionrole = message.guild.roles.find(x => x.name === 'Member');


    message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        "⚠ **Reminder!** ⚠"
      ].join('\n'))

 message.delete().catch(O_o=>{});

 talkedRecently.add(message.author.id);
 setTimeout(() => {
   talkedRecently.delete(message.author.id);
 }, 18000000);
}

    } catch(err) {
        catchErr(err)

    }

}

module.exports.help = {
    name: "r"
}
