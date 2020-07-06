const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => { 
       
        try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !userinfo <user>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !userinfo <user>");
        return;
    }

try {

const iuser = message.guild.member(message.mentions.users.first()) || await message.guild.members.get(args[0]);

const iduser = message.mentions.users.first() || await bot.fetchUser(args[0]);

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Was not able to find that user!");

//if(!iuser) return message.channel.send(errEmbed);

let d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

let userembed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle(`**User Information**`)
      .setThumbnail(`${iduser.displayAvatarURL}`)
      .setDescription([
       `**General Information**`,
       `Username: ${iduser.tag}`,
       ` `,
       `Nickname: ${iuser.nickname || "None"}`,
       ` `,
       `ID: ${iuser.id}`,
       ` `,
       `Registered: ${moment.utc(iduser.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
       ` `,
       `**Guild Related Information**`,
       `Joined: ${moment.utc(iuser.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
       ` `,
       `Roles: ${iuser.roles.map(r => `${r}`).join(' | ')}`,
       ].join('\n'))

message.channel.send(userembed)

} catch(err) {
console.log(err)
       
const iuser = message.guild.member(message.mentions.users.first()) || await bot.fetchUser(args[0]);

const iduser = message.mentions.users.first() || await bot.fetchUser(args[0]);

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Was not able to find that user!");

let d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':');

let leftuserembed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle(`**User Information**`)
      .setThumbnail(`${iduser.displayAvatarURL}`)
      .setDescription([
       `**General Information**`,
       `Username: ${iuser.tag}`,
       ` `,
       `Nickname: None`,
       ` `,
       `ID: ${iuser.id}`,
       ` `,
       `Registered: ${moment.utc(iduser.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
       ` `,
       `**Guild Related Information**`,
       `Joined: Unknown, the user is not in this guild!`,
       ` `,
       `Roles: None`,
       ].join('\n'))

message.channel.send(leftuserembed)


}

} catch(err) {
     console.log(err)
            
       }

}

module.exports.help = {
    name: "userinfo"
}
