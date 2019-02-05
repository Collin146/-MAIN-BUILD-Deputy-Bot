const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let userembed = new Discord.RichEmbed()
    .setDescription("User Information")
    .setColor("#ff6a00")
    .addField("User Name", username)
    .addField("User Tag", tag)
    .addField("User ID", ID)
    .addField("Account Created On", createdAt)
    .addField("Joined Server On", joinedAt)
    .addField("User Presence", presence);
    
    return message.channel.send(userembed);


}

module.exports.help = {
    name: "userinfo"


}
