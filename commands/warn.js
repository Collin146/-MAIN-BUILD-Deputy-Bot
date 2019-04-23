const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

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
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find that user.");
  if(wUser.hasPermission("ADMINISTRATOR")) return message.reply("You can't warn a Admin or higher.");
  let reason = args.slice(1).join(" ");
  if (!reason) return message.reply("Please give a reason");
  let mentioned = message.mentions.users.first();
  const yes = bot.emojis.get("561106357131018273");
  const no = bot.emojis.get("561106624757104640");

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
  .setTitle("**Moderation Command Used!**")
  .setTimestamp()
  .setColor("BLACK")
  .setDescription([
      `**The moderation command** !warn **has been used**`,
      ` `,
      `**Used On:** <@${wUser.id}>`,
      ` `,
      `**Used In:** ${message.channel}`,
      ` `,
      `**Used By:** ${message.author.username}`,
      ` `,
      `**Reason For Warning:** ${reason}`
    ].join('\n'))
  .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
  
  let warnchannel = message.guild.channels.find(`name`, "modlog");
  if(!warnchannel) return message.reply("Couldn't find channel");
  
  warnchannel.send(ModEmbed);

  let DMembed = new Discord.RichEmbed()
  .setTitle(`**You have been warned in ${message.guild.name}**`)
  .setColor("#ff0c00")
  .addField("Punishment Type", "Warning")
  .addField("Reason", reason);
 
mentioned.send(DMembed);

}

module.exports.help = {
  name: "warn"
}
