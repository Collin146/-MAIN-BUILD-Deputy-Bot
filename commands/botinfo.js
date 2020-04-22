const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("700843409526620180");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`botinfo.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Bot Information**")
    .setColor("#ff6a00")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("This bot was created and developed by:", "Collin A.#6966")
    return message.channel.send(botembed);


} catch (err) {
    catchErr(err)

}

}

module.exports.help = {
    name: "botinfo"


}
