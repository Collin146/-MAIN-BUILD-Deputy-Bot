const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#ff6a00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addBlankField(true)
    .addField("Created On", message.guild.createdAt)
    .addBlankField(true)
    .addField("Created By", message.guild.owner)
    .addBlankField(true)
    .addField("You Joined", message.member.joinedAt)
    .addBlankField(true)
    .addField("Roles", message.guild.role_count)
    .addBlankField(true)
    .addField("Channels", message.guild.channel_count)
    .addBlankField(true)
    .addField("Total Members", message.guild.memberCount)
    .addBlankField(true)
    .addField("Region", message.guild.region)
    .addBlankField(true)
    .addField("Invite Link", "https://discord.gg/VqXfwn8");

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"

}



