const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`suggest.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
const maybe = bot.emojis.get("700713222566707203");
let kReason = args.join(" ").slice(0);

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide your suggestion!`);

if(!kReason) return message.channel.send(errEmbed);

let sugembed = new Discord.RichEmbed()
.setTitle("**New Suggestion!**")
.setColor("GREEN")
.setAuthor(`${message.author.username}`, message.author.avatarURL)
.setDescription(`${kReason}`);
    
let warnchannel = message.guild.channels.find(x => x.name === 'server-suggestions-staff-only');

const sentMessage =  await warnchannel.send(sugembed);
await sentMessage.react(yes.id);
await sentMessage.react(maybe.id);
await sentMessage.react(no.id);

// warnchannel.send(sugembed)
// .then(sentMessage => sentMessage.react('✔'))
// // .then(sentMessage => sentMessage.react('➖'))
// // .then(sentMessage => sentMessage.react('❌'))
// .catch(() => console.error('Failed to react to msg.'));

// warnchannel.send(sugembed).then(sentMessage => {
// let emoji1 = message.guild.find(`name`, "heavy_check_mark");
// let emoji2 = message.guild.find(`name`, "heavy_minus_sign");
// let emoji3 = message.guild.find(`name`, "heavy_multiplication_x");
// sentMessage.react(emoji1);
// sentMessage.react(emoji2);
// sentMessage.react(emoji3);

// });

let doneembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("Your suggestion has been sent to the Staff Team!");

message.channel.send(doneembed);

    } catch(err) {
        catchErr(err)
        
    }

}

module.exports.help = {
    name: "suggest"
}
