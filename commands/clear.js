const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Clear command used!**")
    .setColor("RED")
    .addField("Cleared In", message.channel, true)
    .addField("Cleared By", message.author.username, true)
    .addField("Cleared Amount", args, true)
    .setTimestamp()
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

    let warnchannel = message.guild.channels.find(`name`, "modlog");
    if(!warnchannel) return message.reply("Couldn't find channel");

    warnchannel.send(ModEmbed);


    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }
    

    //!clear 15
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that.");
    if(!args[0]) return message.channel.send("Specify what amount of messages.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));


    });
}


module.exports.help = {
    name: "clear"
}
