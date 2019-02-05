const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#ff6a00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addBlankField
    .addField("Created On", message.guild.createdAt)
    .addBlankField
    .addField("Created By", message.guild.owner)
    .addBlankField
    .addField("You Joined", message.member.joinedAt)
    .addBlankField
    .addField("Roles", message.guild.roles)
    .addBlankField
    .addField("Channels", message.guild.channels)
    .addBlankField
    .addField("Total Members", message.guild.memberCount)
    .addBlankField
    .addField("Region", message.guild.region)
    .addBlankField
    .addField("Invite Link", "https://discord.gg/VqXfwn8");

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"

}
