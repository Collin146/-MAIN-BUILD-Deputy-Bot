const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`serverinfo.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

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

    } catch(err) {
        catchErr(err)
        
    }
    
}

module.exports.help = {
    name: "serverinfo"

}
