const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !ban <user> <reason");
        return;
    }

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot ban an Admin.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("A user has been banned")
    .setColor("#ff6a00")
    .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "modlog");
    if(!incidentchannel) return message.channel.send("Can't find modlog channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

}

 module.exports.help = {
     name: "ban"


 }