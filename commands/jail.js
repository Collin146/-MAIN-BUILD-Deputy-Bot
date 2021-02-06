const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`tempmute.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

const no = bot.emojis.get("700713478578634783"); 

       let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription(`Only LEO have permission to use this command!`)

    guildAuthor = message.guild.members.get(message.author.id);

    if(!guildAuthor.roles.has("644229497062948864")) return message.channel.send(errEmbed);
    if(args[0] === "help"){
        message.reply("Usage: !jail <user> <time> <reason>");
        return;
    }
    
const yes = bot.emojis.get("700713527576625205");
const warningsign = bot.emojis.get("729725849343098900");
let tojail = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let jailReason = args.slice(2).join(" ");

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't specify the user!`);

if (!tojail) return message.channel.send(errEmbed2);

let jailtime = args[1];

let errEmbed3 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't specify a time!`);

if(!jailtime) return message.channel.send(errEmbed3);

try {

await(tojail.setVoiceChannel('807677661748920350'));

} catch(err) {  
}

message.delete().catch(_O_o=>{})

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${tojail.id}> has been sentenced for ${ms(ms(jailtime))}.`)
      .setFooter(`Mentioned User ID: ${tojail.id}`);

message.author.send(geluktEmbed);

jailEmbed = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription(`**Judge:** <@${tojail.id}> has been sentenced for ${ms(ms(jailtime))} for ${jailReason}.`)

let rpchannel = message.guild.channels.find(x => x.name === 'rp-actions');
rpchannel.send({embed: jailEmbed});

geluktEmbed3 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${warningsign} **Jailed!**`)
.setDescription(`You have been sentenced for ${ms(ms(jailtime))} for ${jailReason}. Due to this, you have been moved to the Penitentiary voice channel. Please stay there until you receive another message stating you have served your time.`)

tojail.send(geluktEmbed3);
    
setTimeout(function(){

    geluktEmbed2 = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Jail Time Served!**`)
    .setDescription(`You have successfully served your sentence of ${ms(ms(jailtime))} for ${jailReason}. You may now switch to a different voice channel.`)

    tojail.send(geluktEmbed2);
}, ms(jailtime));

} catch(err) {
    catchErr(err)

}

}

module.exports.help = {
name: "jail"
}
