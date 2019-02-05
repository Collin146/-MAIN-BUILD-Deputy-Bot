const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    bot.on(message, [channel = message.channel]); {
    const type = channel.type === 'text' ? 'SEND_MESSAGES' : 'CONNECT';
    await channel.overwritePermissions(channel.guild.defaultRole, { [type]: false });
    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES') === false) return true;
    return message.send('This channel is locked.');
  }
}

  module.exports.help = {
    name: "lock"
}
