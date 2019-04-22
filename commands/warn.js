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

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let WEmbed = new Discord.RichEmbed()
  .setTitle("**A user has been warned!**")
  .setColor("#ff0c00")
  .addField("Punished User", `<@${wUser.id}>`)
  .addField("Punishment Type", "Warning")
  .addField("Reason", reason)

  message.reply(WEmbed);

  let ModEmbed = new Discord.RichEmbed()
  .setTitle("**Warn command used!**")
  .setColor("RED")
  .addField("Warned User", `<@${wUser.id}>`, true)
  .addField("Warned In", message.channel, true)
  .addField("Reason", reason, true)
  .addField("Number of Warnings", warns[wUser.id].warns, true)
  .addField("Warned By", message.author.username, true)
  .setTimestamp()
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

//   if(warns[wUser.id].warns == 2){
//     let muterole = message.guild.roles.find(`name`, "muted");
//     if(!muterole) return message.reply("You should create that role.");

//     let mutetime = "10s";
//     await(wUser.addRole(muterole.id));
//     message.channel.send(`<@${wUser.id}> has been temporarily muted`);

//     setTimeout(function(){
//       wUser.removeRole(muterole.id)
//       message.reply(`<@${wUser.id}> has been unmuted.`)
//     }, ms(mutetime))
//   }
//   if(warns[wUser.id].warns == 3){
//     message.guild.member(wUser).ban(reason);
//     message.reply(`<@${wUser.id}> has been banned.`)
//   }

}

module.exports.help = {
  name: "warn"
}
