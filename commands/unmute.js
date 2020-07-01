const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("700843409526620180");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`unmute.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

        try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !unmute <user>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !unmute <user>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");
let tociv = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`Was not able to find that user!`);

if(!tociv) return message.channel.send(errEmbed);
let memberrole = message.guild.roles.find(x => x.name === 'Member');
let nmrole = message.guild.roles.find(x => x.name === 'Muted');

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You cannot use this command on an administrator`);

if(tociv.hasPermission("ADMINISTRATOR")) return message.channel.send(errEmbed2); 
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)
    
let errEmbed3 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`The role \"Member\" doesn't exist!`);

if(!memberrole) return message.channel.send(errEmbed3);

let errEmbed4 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`The role \"Muted\" doesn't exist!`);

if(!nmrole) return message.channel.send(errEmbed4);

tociv.removeRole(nmrole.id);
tociv.addRole(memberrole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !unmute`,
    `**Used On:** <@${tociv.id}>`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});


geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${tociv.id}> has been unmuted!`)
      .setFooter(`Mentioned User ID: ${tociv.id}`);

      message.channel.send(geluktEmbed);

        } catch(err) {
            catchErr(err)
            
        }

}

module.exports.help = {
    name: "unmute"
}
