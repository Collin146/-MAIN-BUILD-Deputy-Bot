const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let mentionrole = message.guild.roles.find(`name`, `Staff Team`);
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");

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
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("The Staff Team has been notified!")

message.channel.send(doneembed);

}

module.exports.help = {
    name: "invite"
}
