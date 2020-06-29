const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

const yes = client.emojis.get("700713527576625205");
const no = client.emojis.get("700713478578634783"); 
const twotter = bot.emojis.get("727159498686595072");
let postcontent = args.join(" ").slice(0);

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a message!`);

if(!postcontent) return message.channel.send(errEmbed);

let postembed = new Discord.RichEmbed()
.setTitle("**New Twotter Post!**")
.setColor("0173ce")
.setDescription(`${postcontent}`);


message.channel.send(postembed);


}

module.exports.help = {
    name: "twotterpost"
}
