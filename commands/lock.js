const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let lock = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !lock <channel>");
        return;
    }
{
    const type = channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
    await channel.overwritePermissions(channel.guild.defaultRole, { [type]: false });
    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES') === false) return true;
    return message.send('This channel is locked.');
  }
}

  module.exports.help = {
    name: "lock"
}
