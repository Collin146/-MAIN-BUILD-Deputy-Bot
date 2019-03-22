const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Server Information**")
    .setColor("#ff6a00")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name, true)
    .addField("Created On", message.guild.createdAt, true)
    .addField("Created By", message.guild.owner, true)
    .addField("You Joined", message.member.joinedAt, true)
    .addField("Total Members", message.guild.memberCount,true)
    .addField("Region", message.guild.region,true)
    .addField("Invite Link", "https://discord.gg/VqXfwn8", true);

    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "serverinfo"

}
