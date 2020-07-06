const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`say.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that.");
let botmessage = args.join(" ");
message.delete().catch();
message.channel.send(botmessage);

} catch(err) {
    catchErr(err)

}

}

module.exports.help = {
    name: "say"
}
