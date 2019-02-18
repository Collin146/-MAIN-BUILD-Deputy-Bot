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
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn a Moderator or higher.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let WEmbed = new Discord.RichEmbed()
  .setTitle("A user has been warned!")
  .setColor("#ff0c00")
  .addField("Punished User", `<@${wUser.id}>`)
  .addField("Punishment Type", "Warning")
  .addField("Reason", reason)

  message.reply(WEmbed);

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("A user has been warned!")
  .setAuthor(message.author.username)
  .setColor("#fc6400")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "modlog");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);

  let DMembed = new Discord.RichEmbed()
  .setTitle("You have been warned in Global Roleplay™ PS4")
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
