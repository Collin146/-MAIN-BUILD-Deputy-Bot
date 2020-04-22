const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("700843409526620180");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`briefing.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !briefing <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !briefing <time>");
        return;
    }

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
let mentionrole = message.guild.roles.find(x => x.name === 'Member');
//let mentionrole = message.guild.roles.find(`name`, `Member`);
let mutetime = args[0];

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("You didn't specify a time!");

if(!mutetime) return message.channel.send(errEmbed);

if(args[0] == "cancel"){

    let dm2embed = new Discord.RichEmbed()
    .setTitle(`${yes} **Done!**`)
    .setColor("GREEN")
    .setDescription(`The briefing room announcement has successfully been cancelled.`)
    .setTimestamp();
    
     message.author.send(dm2embed);
    
     return stop;

     function stop() {
         if (mutetime) {
             clearTimeout(mutetime);
             mutetime = 0;
         }
 }
 
    }

setTimeout(function(){
    message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        "⚠ **Join Briefing Room Now!** ⚠"
      ].join('\n'))
}, ms(mutetime));

let dmembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription(`I will post an announcement in ${message.channel} for briefing room in ${mutetime}.`)
.setTimestamp();
try{
    await message.author.send(dmembed);
}catch(e){

    let errEmbed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Your DMs are locked. I cannot send you the confirmation message!");

    message.channel.send(errEmbed2);

 }
 message.delete().catch(O_o=>{})

} catch(err){
    catchErr(err)

}

}

module.exports.help = {
    name: "briefing"
}
