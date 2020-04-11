const Discord = require("discord.js");
const moment = require('moment');

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:Online:562636140302041109>",
        idle: "<:Idle:562636980509474816>",
        dnd: "<:Dnd:562637029624643622>",
        offline: "<:Offline:562637080526716939>"
      }
        
user = message.mentions.users.first();
//const user = message.mentions.users.first() || await bot.fetchUser(args[0]);
//const member = message.guild.member(user) || await message.guild.fetchMember(user) || await bot.fetchUser(args[0]) || message.author;
const member = bot.fetchUser(args[0]) || await message.mentions.users.first();
const userondiscord = member.createdTimestamp || user.createdTimestamp;
const useronserver = member.joinedTimestamp || user.joinedTimestamp;
// let target = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author
// const now = new Date[0](member.user.createdAt);
// var  mydate = new Date(member.user.createdAt.startDate.value);

if (user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }

  
  let embed = new Discord.RichEmbed()
  //.setAuthor(member.user.username)
  .setTitle(`**Information About**`)
  .setThumbnail((member.displayAvatarURL))
  .setColor(message.guild.member(user).highestRole.color || "BLACK") 
  .setDescription([
   // `${member.presence.status}`,
   // ` `,
    `**Full Username:** ${member.tag}`,
    ` `,
    `**ID:** ${member.id}`,
    ` `,
    `**Nickname:** ${member.nickname !== null ? `${member.nickname}` : "None"}`,
    ` `,
    `**Bot:** ${bot}`,
    ` `,
    `**Playing:** ${member.presence.game ? `${member.presence.game.name}` : "Nothing"}`,
    ` `,
    `**Joined Discord At:** ${userondiscord}`
    ` `,
    `**Joined Server At:** ${useronserver}`
    ` `,
    `**Roles:** ${message.guild.member(member).roles.map(s => s).join(" | ")} || "None"`
  ].join('\n'))


message.channel.send(embed);

            // let embed = new Discord.RichEmbed()
            //     //.setAuthor(member.user.username)
            //     .setTitle(`**Information About**`)
            //     .setDescription(`${status[member.user.presence.status]} **${member}**`)
            //     .setThumbnail((target.displayAvatarURL))
            //     .setColor(message.guild.member(member).highestRole.color)
            //     .addField("Full Username", `${member.user.tag}`, inline)
            //     .addField("ID", member.user.id, inline)
            //     .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "None"}`, true)
            //     .addField("Bot", `${bot}`, inline, true)
            //     .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing"}`,inline, true)
            //     .addField("Joined Discord At", ${member.user.createdAt})
            //     .addField("Joined This Server At", message.guild.member(member).joinedAt)
            //     .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

            // message.channel.send(embed);
    }

    module.exports.help = {
        name: "userinfo"
    }
