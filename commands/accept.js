const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`accept.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !accept <user>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !accept <user>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");  
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let rDuser = bot.users.get(args[0]);

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Was not able to find that user!");

if (!rUser) return message.channel.send(errEmbed);

let geluktEmbed = new Discord.RichEmbed()
      .setTitle(`${yes} **Congratulations!**`)
      .setColor("GREEN")
      .setDescription(`<@${rUser.id}> Your application has been approved! You have taken your first step into the community. The next step is to wait for an interview to be announced/scheduled. We wish you good luck!`);

      
let acceptchannel = message.guild.channels.find(x => x.name === 'accepted-applicants');
acceptchannel.send(geluktEmbed);

geluktEmbed2 = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle(`${yes} **Done!**`)
.setDescription(`<@${rUser.id}> has been notified!`)
.setFooter(`Mentioned User ID: ${rUser.id}`);

message.channel.send(geluktEmbed2);

let acceptembed = new Discord.RichEmbed()
      .setTitle("**Application Form Results**")
      .setColor("GREEN")
      .setDescription([
          `**From:** ${message.guild.name}`,
          `**Date & Time:** ${moment.utc(message.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
          `**Status:** Approved`,
          `**Message:** Your application has been approved! You have taken your first step into the community. The next step is to wait for an interview to be announced/scheduled in <#644273618011815946>. We wish you good luck!`,
          ` `,
          `Please keep in mind that you will have a total of 30 days to attend an interview. If you fail to do so within those 30 days, your approved for interview status will unfortunately be removed and you will be forced to reapply if you want to be eligible for interviews again. To see how many days you have left, please refer to the following document: https://bit.ly/3kxyyr5`,
          `(Please note that it may take several hours until you get added to this document).`
        ].join('\n'))
    
rUser.send(acceptembed);

let approle = message.guild.roles.find(x => x.name === 'Applicant');
let accrole = message.guild.roles.find(x => x.name === 'Approved For Interview');

rUser.removeRole(approle.id);
rUser.addRole(accrole.id);

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !accept`,
    `**Used On:** <@${rUser.id}>`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`,
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

let portalguild = bot.guilds.get('644301808680042506');

let acceptedEmbed = new Discord.RichEmbed()
.setTitle("**Applicant Accepted!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Date & Time:** ${moment.utc(message.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
    `**Applicant Name:** ${rDuser.tag}`,
    `**Applicant ID:** ${rUser.id}`,
    `**Accepted By:** ${message.author.username}`,
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let acceptedlog = portalguild.channels.find(x => x.name === 'accepted-log');
acceptedlog.send({embed: acceptedEmbed});

    } catch (err)  {
     catchErr(err);

    }

}

module.exports.help = {
    name: "accept"

}
