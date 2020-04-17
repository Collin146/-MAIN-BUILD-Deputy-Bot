const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

    geluktEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Command List**`)
    .setDescription(`Here is the command list of this bot: \https://docs.google.com/document/d/10m06EtPOt64mJ86K2IFeXH5c5tVN-F2bZ9r8x4ikc5o/edit?usp=sharing\ `)

    message.channel.send(geluktEmbed);

}

module.exports.help = {
    name: "help"
}
