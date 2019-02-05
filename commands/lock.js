const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    bot.on(msg, [channel = msg.channel]); {
    const type = channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
    await channel.overwritePermissions(channel.guild.defaultRole, { [type]: false });
    if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES') === false) return true;
    return msg.send('This channel is locked.');
  }
}

  module.exports.help = {
    name: "lock"
}
