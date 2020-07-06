const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  function catchErr (err, message) {

    let errchannel = bot.channels.find(x => x.name === 'errors');
    const warningsign = bot.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`dm.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

  try {

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !dm <message>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !dm <message>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
let reason = args.join(" ");

let errEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription("You didn't provide a message!");

if (!reason) return message.channel.send(errEmbed);

let dmembed = new Discord.RichEmbed()
  .setTitle(`**A message from ${message.guild.name}.**`)
  .setColor("#00fff6")
  .setDescription(`${reason}`);

message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot) member.send(dmembed);
    });

let doneembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("A message has been sent to everyone in this server.");

message.channel.send(doneembed);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !dm`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`,
    `**Message:** ${reason}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

  } catch(err) {
    catchErr(err)

  }

}

module.exports.help = {
    name: "dm"
}
