const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    const embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
    .addField("Nickname:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "No nickname"}`, true)
    .addField("Bot?", `${bot}`, true)
    .addField("Guild", `${bot}`, true)
    .addField("Status", `${status[member.user.presence.status]}`, true)
    .addField("Playing", `${member.user.presence.game ? `${member.user.presence.game.name}` : "not playing anything."}`, true)
    .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Joined At", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Created At", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  message.channel.send({embed});

}

module.exports.help = {
    name: "userinfo"

}
