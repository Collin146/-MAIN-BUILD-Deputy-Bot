const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Server Information**")
    .setColor("#ff6a00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name, true)
    .addField("Server ID", message.guild.id)
    .addField("Created On", message.guild.createdAt)
    .addField("Created By", message.guild.owner)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .addField("Region", message.guild.region)
    .addField("Invite Link", "https://discord.gg/VqXfwn8");

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"

}
