const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {

function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`alert.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }
        
try {
    
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
const warningsign = bot.emojis.get("729725849343098900");
const firebot = bot.emojis.get("729718092560728095");
const lightbar = bot.emojis.get("729717051488206918");

let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Please provide a postal code & street name!");
    
    if(args[0] === "silentalarm"){
    
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');
    const provinfo = args.join(" ").slice(12);
    if (!provinfo) return message.channel.send(errEmbed);
    
    let errEmbed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("The role \"On Patrol\" doesn't exist.");
    
    if (!mentionrole) return message.channel.send(errEmbed2);
        message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        `${lightbar} **Silent Alarm!** ${lightbar}`,
        `A silent alarm has been received from ${provinfo}. Please notify dispatch if active!`,
      ].join('\n'))
        
        message.delete().catch(O_o=>{});
        
        return;
            }
    
    if(args[0] === "firealarm"){
    
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');
    const provinfo2 = args.join(" ").slice(10);
    if (!provinfo2) return message.channel.send(errEmbed);
    
    let errEmbed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("The role \"On Patrol\" doesn't exist.");
    
    if (!mentionrole) return message.channel.send(errEmbed2);
        message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        `${firebot} **Fire Alarm!** ${firebot}`,
        `A fire alarm has been received from ${provinfo2}. Please notify dispatch if active!`,
      ].join('\n'))
        
        message.delete().catch(O_o=>{});
        
        return;
            }
    
    if(args[0] === "patrol"){
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !alert <alert type> <info>");
        return;
    }
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !alert <alert type> <info>");
        return;
    }
    
    let errEmbed3 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Please provide a message!");
    
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');
    const provinfo3 = args.join(" ").slice(7);
    if (!provinfo3) return message.channel.send(errEmbed3);
    
    let errEmbed2 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("The role \"On Patrol\" doesn't exist.");
    
    if (!mentionrole) return message.channel.send(errEmbed2);
        message.channel.send([
        `<@&${mentionrole.id}>`,
        ` `,
        `${warningsign} **Administrative Message!** ${warningsign}`,
        `${provinfo3}`,
      ].join('\n'))
        
        message.delete().catch(O_o=>{});
        
        return;
            }
    
    let errEmbed4 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription("Please provide a type of alert! This can either be \"silentalarm\", \"firealarm\", or \"patrol\".");
    
    message.channel.send(errEmbed4);
    
    } catch(err) {
    catchErr(err) 
    
    }
    
    }

 module.exports.help = {
     name: "alert"
 }
