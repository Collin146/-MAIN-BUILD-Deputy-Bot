const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
const twotter = bot.emojis.get("727159498686595072");
let postcontent = args.join(" ").slice(0);

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a message!`);

if(!postcontent) return message.channel.send(errEmbed);

const postimage = ("https://media.discordapp.net/attachments/511913643923996683/727158652888154163/image1.png")

let postembed = new Discord.RichEmbed()
.setTitle("**New Twotter Post!**")
.setColor("0173ce")
.setDescription(`${twotter} ${postcontent}`)
.setImage(`${postimage}`);


message.channel.send(postembed);


}

module.exports.help = {
    name: "twotterpost"
}
