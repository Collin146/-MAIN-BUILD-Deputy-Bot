const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !tempmute <user> <time>");
        return;
    }
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !investigation <user>");
        return;
    }

let toinvest = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!toinvest) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
let investrole = message.guild.roles.find(`name`, "Investigation");
if(toinvest.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot use this command on an admin!");
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

toinvest.setRoles([investrole.id])
    .catch(console.error);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Investigation command used!**")
.setColor("RED")
.addField("Used On", `<@${toinvest.id}>`, true)
.addField("Command Used In", message.channel, true)
.addField("Command Used By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");
    
warnchannel.send(ModEmbed);
    

    geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`The roles of <@${toinvest.id}> have been updated!`)
      .setFooter(`Mentioned User ID: ${toinvest.id}`);

      message.channel.send(geluktEmbed);
   
//end of module

}

module.exports.help = {
    name: "investigation"
}
