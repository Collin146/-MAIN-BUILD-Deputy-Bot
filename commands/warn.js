const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  function catchErr (err, message) {

    let errchannel = bot.channels.find(x => x.name === 'errors');
    const warningsign = bot.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`warn.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !warn <user> <reason>");
        return;
    }
    
  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !warn <user> <reason>");
        return;
    }

  const yes = bot.emojis.get("700713527576625205");
  const no = bot.emojis.get("700713478578634783"); 
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  let errEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription(`Was not able to find that user!`);

  if(!wUser) return message.channel.send(errEmbed);
  let reason = args.slice(1).join(" ");

  let errEmbed2 = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription(`You didn't provide a reason!`);

  if (!reason) return message.channel.send(errEmbed2);
  let mentioned = message.mentions.users.first();

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  geluktEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle(`${yes} **Done!**`)
  .setDescription(`<@${wUser.id}> has been warned for \`${reason}\``)
  .setFooter(`Mentioned User ID: ${wUser.id}`);

  message.channel.send(geluktEmbed);

  let ModEmbed = new Discord.RichEmbed()
  .setTitle("**Command Used!**")
  .setTimestamp()
  .setColor("BLACK")
  .setDescription([
      `**Command:** !warn`,
      `**Used On:** <@${wUser.id}>`,
      `**Used In:** ${message.channel}`,
      `**Used By:** ${message.author.username}`,
      `**Reason For Warning:** ${reason}`
    ].join('\n'))
  .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
  
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});
    

  let DMembed = new Discord.RichEmbed()
  .setTitle(`**You have received a warning in ${message.guild.name}**`)
  .setColor("#ff0c00")
  .addField("Punishment Type", "Warning")
  .addField("Reason", reason);
 
mentioned.send(DMembed);

  } catch(err) {
    catchErr(err)
    
  }

}

module.exports.help = {
  name: "warn"
}
