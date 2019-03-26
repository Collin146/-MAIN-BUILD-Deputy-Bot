const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let mentionrole = message.guild.roles.find(`name`, `Staff Team`);

let invembed = new Discord.RichEmbed()
.setTitle("**Invite Request!**")
.setColor("GREEN")
.setDescription(`${message.author} needs an invite to the session.`)
.setTimestamp()

let warnchannel = message.guild.channels.find(`name`, "needs-an-invite");
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(`<@&${mentionrole.id}>`)
await warnchannel.send(invembed);

let doneembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setColor("GREEN")
.setDescription("The Staff Team has been notified!")

message.channel.send(doneembed);

}

module.exports.help = {
    name: "invite"
}
