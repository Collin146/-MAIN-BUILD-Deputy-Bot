const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");

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
const warningsign = bot.emojis.get("729725849343098900");
const load = bot.emojis.get("756297351353729055");
let reason = args.join(" ");

let errEmbed = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription("You didn't provide a message!");

if (!reason) return message.channel.send(errEmbed);

let confirmationEmbed = new Discord.RichEmbed()
.setTitle(`${warningsign} **Confirmation!**`)
.setTimestamp()
.setColor("RED")
.setDescription(`Are you sure you want to send a direct message to ${message.guild.memberCount} members? If so, press ${yes}. If not, press ${no}.`);

const sentMessage =  await message.channel.send(confirmationEmbed);
await sentMessage.react(yes.id);
await sentMessage.react(no.id);

const filter = (reaction, user) => {
  return [yes.id, no.id].includes(reaction.emoji.id) && user.id === message.author.id;
};

sentMessage.awaitReactions(filter, {max: 1, time: 60000, errors: ['time'] })
  .then(async collected => {
      const reaction = collected.first();

      if (reaction.emoji.id === yes.id) {
  
        let dmembed = new Discord.RichEmbed()
        .setTitle("**Serverwide Message**")
        .setColor("BLACK")
        .setDescription([
            `**From:** ${message.guild.name}`,
            `**Date & Time:** ${moment.utc(message.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
            `**Reason:** ${reason}`,
          ].join('\n'))

          let loadembed = new Discord.RichEmbed()
          .setTitle(`${load} **Sending Messages...**`)
          .setColor("GREEN")
          .setDescription("This might take a few moments, a confirmation message will be sent once this process is done.");

          let doneembed = new Discord.RichEmbed()
          .setTitle(`${yes} **Done!**`)
          .setColor("GREEN")
          .setDescription("A message has been sent to everyone in this server.");
      
          let sentmessage4 = await message.channel.send(loadembed)
          let deleteID = sentmessage4.id

      message.guild.members.forEach(async member => {
        
        if (member.id != bot.user.id && !member.user.bot) member.send(dmembed)
        
        });

        await message.channel.fetchMessage(deleteID).then(async msg => {
            await message.channel.send(doneembed);
            if (msg) msg.delete();
          });   

      
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
         return; 
      }
      else {

        let stopEmbed = new Discord.RichEmbed()
        .setTitle(`${no} **Done!**`)
        .setColor("RED")
        .setDescription("The command has been cancelled");
        
        await message.channel.send(stopEmbed);

      }
  })
  .catch(async collected => {

    let stopEmbed2 = new Discord.RichEmbed()
    .setTitle(`${no} **Time Expired!**`)
    .setColor("RED")
    .setDescription("The command has automatically been cancelled.");
    
    await message.channel.send(stopEmbed2);

  });


  } catch(err) {
    catchErr(err)

  }

}

module.exports.help = {
    name: "dm"
}
