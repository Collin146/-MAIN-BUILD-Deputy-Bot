const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:562588221121232907>",
        idle: "<:idle:562588270903427072>",
        dnd: "<:dnd:562588318684938240>",
        offline: "<:offline:562588687884484608>"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Yes";
  } else {
    bot = "No";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setTitle(`**Information About**`)
                .setDescription(`${status[member.user.presence.status]} **${member}**`)
                .setThumbnail((target.displayAvatarURL))
                .setColor(message.guild.member(member).highestRole.color)
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:yes:425632265993846795> Nickname: ${member.nickname}` : "None"}`, true)
                .addField("Bot", `${bot}`, inline, true)
                //.addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Not playing"}`,inline, true)
                .addField("Joined Discord At", member.user.createdAt)
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)

            message.channel.send(embed);
    }

    module.exports.help = {
        name: "userinfo"
    }
