const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`session.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !session <day> <time>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");
let mentionrole = message.guild.roles.find(x => x.name === 'Member');
    
const drp1 = bot.emojis.get("759125897953017857");
const drp2 = bot.emojis.get("759125936586883072");
const drp3 = bot.emojis.get("759125984967393330");
const drp4 = bot.emojis.get("759126011265941506");
const drp5 = bot.emojis.get("759126035215810592");
const drp6 = bot.emojis.get("759126060355813376");
const drp7 = bot.emojis.get("759126083781394444");


    let sessionEmbed = new Discord.RichEmbed()
.setTitle("**Session Date Voting**")
.setTimestamp()
.setColor("#f5f5f5")
.setDescription([
    `This message will include all 7 days of the week to schedule sessions on. Each member has the ability to vote for a or multiple days they can attend a session on. This is done by reacting to this message with the appropriate reaction signifying the day you are available on. Which reaction signifies which day can be seen below. The time of the sessions will be the standard \`7:30 PM BST\``,
    ` `,
    `${drp1} - Monday`,
    `${drp2} - Tuesday`,
    `${drp3} - Wednesday`,
    `${drp4} - Thursday`,
    `${drp5} - Friday`,
    `${drp6} - Saturday`,
    `${drp7} - Sunday`,
    ` `,
    `The system will automatically check if one or multiple reactions have reached 8+ reactions, including one from the Administrators (or higher). If this is the case, a session for that specific day will automatically be announced and all members that voted for that day will be expected to attend.`,
    ` `,
    `For Administrators+ only, to disable the session voting system, press the ${no} below. To enable the system again, press the ${yes}.`
  ].join('\n'))

const sentMessage =  await message.channel.send(sessionEmbed);
await sentMessage.react(drp1.id);
await sentMessage.react(drp2.id);
await sentMessage.react(drp3.id);
await sentMessage.react(drp4.id);
await sentMessage.react(drp5.id);
await sentMessage.react(drp6.id);
await sentMessage.react(drp7.id);
await sentMessage.react(no.id);
await sentMessage.react(yes.id);


    } catch(err) {
        catchErr(err)
        
    }

}

module.exports.help = {
    name: "sessionvotingembed"
}
