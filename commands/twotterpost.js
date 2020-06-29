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

let usertag = message.author.username;
//let postauthor = message.guild.author

let guild = bot.guilds.get('644227663829139466');
let member = guild.member(message.author);
let nickname = member ? member.displayName : null;

const currentdate = new Date(); 
const datetime = "• " + currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " @ "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes() + ":" 
    + currentdate.getSeconds();

let postembed = new Discord.RichEmbed()
.setAuthor(`${nickname} @${usertag} ${datetime}`, message.author.avatarURL)
.setColor("0173ce")
.setDescription(`${postcontent}`);

message.channel.send(postembed);

}

module.exports.help = {
    name: "twotterpost"
}
