exports.run('channelCreate', channel => {

    const ccembed = new Discord.RichEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setTitle("**Channel Created!**")
    .setDescription([
        `**Channel Name:** ${channel.name}`,
        `**Channel ID:** ${channel.id}`,
        `**Channel Type:** ${channel.type}`
      ].join('\n'))

let modlogchannel = message.guild.channels.find(`name`, "modlog");
modlogchannel.send(ccembed);

});
