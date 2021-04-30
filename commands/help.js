const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`help.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !ban <user> <reason");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
   

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 

    geluktEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Command List**`)
    .setDescription(`Here is the command list of this bot: \https://docs.google.com/document/d/10m06EtPOt64mJ86K2IFeXH5c5tVN-F2bZ9r8x4ikc5o/edit?usp=sharing\ `)

    message.channel.send(geluktEmbed);

    } catch(err) {
        catchErr(err)

    }

}

module.exports.help = {
    name: "help"
}
