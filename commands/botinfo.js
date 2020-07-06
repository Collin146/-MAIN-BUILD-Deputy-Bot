const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`botinfo.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Bot Information**")
    .setColor("BLACK")
    .setThumbnail(bicon)
    .setDescription([
       `**General Information**`,
       `Bot Name: ${bot.user.username}`,
       ` `,
       `Created On: ${moment.utc(bot.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
       ` `,
       `Created & Developed By: Collin A.#6966`,
       ].join('\n'))
       
    message.channel.send(botembed);


} catch (err) {
    catchErr(err)

}

}

module.exports.help = {
    name: "botinfo"


}
