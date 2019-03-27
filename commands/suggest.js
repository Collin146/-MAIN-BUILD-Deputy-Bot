const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let kReason = args[0];
if (!kReason) return message.reply("Please give a suggestion");

let sugembed = new Discord.RichEmbed()
.setTitle("**New Suggestion!**")
.setColor("GREEN")
.setAuthor(`${message.author.username}`, message.author.avatarURL)
.setDescription(`${kReason}`);

let warnchannel = message.guild.channels.find(`name`, "server-suggestions-staff-only"); 
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(sugembed)
.then(sentMessage => sentMessage.react('✔'))
.then(sentMessage => sentMessage.react('➖'))
.then(sentMessage => sentMessage.react('❌'))
.catch(() => console.error('Failed to react to msg.'));

// warnchannel.send(sugembed).then(sentMessage => {
// let emoji1 = message.guild.find(`name`, "heavy_check_mark");
// let emoji2 = message.guild.find(`name`, "heavy_minus_sign");
// let emoji3 = message.guild.find(`name`, "heavy_multiplication_x");
// sentMessage.react(emoji1);
// sentMessage.react(emoji2);
// sentMessage.react(emoji3);

// });

let doneembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setColor("GREEN")
.setDescription("Your suggestion has been sent to the Staff Team!");

message.channel.send(doneembed);

}

module.exports.help = {
    name: "suggest"
}
