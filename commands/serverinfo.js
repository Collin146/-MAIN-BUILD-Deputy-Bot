const Discord = require("discord.js");
const moment = require("moment");

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
    .setColor("BLACK")
    .setThumbnail(sicon)
    .setDescription([
        `**General Information**`,
        `Server Name: ${message.guild.name}`,
        ` `,
        `Server ID: ${message.guild.id}`,
        ` `,
        `Created On: ${moment.utc(message.guild.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
        ` `,
        `Created By: ${message.guild.owner}`,
        ` `,
        `Total Members: ${message.guild.memberCount}`,
        ` `,
        `Total Channels: ${message.guild.channels.size}`,
        ` `,
        `Region: ${message.guild.region}`
      ].join('\n'))

    message.channel.send(serverembed);

    } catch(err) {
        catchErr(err)
        
    }
    
}

module.exports.help = {
    name: "serverinfo"

}
