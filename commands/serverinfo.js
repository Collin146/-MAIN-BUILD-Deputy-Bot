const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;

    let serverembed = new Discord.RichEmbed()
    .setTitle("**Server Information**")
    .setColor("#00fff6")
    .setThumbnail(sicon)
    .setDescription([
        `**Server Name:** ${message.guild.name}`,
        ` `,
        `**Server ID:** ${message.guild.id}`,
        ` `,
        `**Created On:** ${message.guild.createdAt}`,
        ` `,
        `**Created By:** ${message.guild.owner}`,
        ` `,
        `**You Joined At:** ${message.guild.joinedAt}`,
        ` `,
        `**Total Members:** ${message.guild.memberCount}`,
        ` `,
        `**Region:** ${message.guild.region}`
      ].join('\n'))

    return message.channel.send(serverembed);
    
}

module.exports.help = {
    name: "serverinfo"

}
