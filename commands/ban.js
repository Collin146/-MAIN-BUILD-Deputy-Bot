const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {
    
    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`ban.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !ban <user> <reason");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
    
//let user = args[0];
//const usercheck = bot.users.get(user) || message.guild.member(message.mentions.users.first())
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Was not able to find that user!");

const user = message.mentions.users.first() || await bot.fetchUser(args[0]);

if(!user) return message.channel.send(errEmbed);
let bReason = args.slice(1).join(" ");
// const username = bot.fetchUser(user)


message.guild.ban(user, { reason: bReason || "None" });

let geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${user.id}> has been banned!`)
      .setFooter(`Mentioned User ID: ${user.id}`);

    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**Command:** !ban`,
        `**Banned User:** <@${user.id}>`,
        `**Used In:** ${message.channel}`,
        `**Used By:** ${message.author.username}`,
        `**Reason For Ban:** ${bReason || "None"}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


    let dmembed =  new Discord.RichEmbed()
    .setTitle(`**You have been banned from ${message.guild.name}.**`)
    .setColor("#00fff6")
    .addField("Reason:", bReason || "None");

    user.send(dmembed);
}

catch (err) {
    catchErr(err)

}

}

 module.exports.help = {
     name: "ban"
 }
