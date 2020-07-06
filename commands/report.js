const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  function catchErr (err, message) {

    let errchannel = bot.channels.find(x => x.name === 'errors');
    const warningsign = bot.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`report.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

  try {

    if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 

    message.delete().catch(O_o=>{});
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let errEmbed = new Discord.RichEmbed()
          .setColor("RED")
          .setTitle(`${no} **Error!**`)
          .setDescription(`Was not able to find that user.`);

        if(!rUser) return message.channel.send(errEmbed).then(msg => msg.delete(5000));

let reason = args.slice(1).join(" ");

        message.delete().catch(O_o=>{});

let errEmbed2 = new Discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription(`You didn't provide a reason!`);

if (!reason) return message.channel.send(errEmbed2).then(msg => msg.delete(5000));

message.delete().catch(O_o=>{});

        let reportEmbed = new Discord.RichEmbed()
          .setTitle("**A user has been reported!**")
          .setColor("ORANGE")
          .addField("Reported User", `${rUser}`)
          .addField("Reported By", `${message.author}`)
          .addField("Channel", message.channel)
          .addField("Reason", reason)
          .setTimestamp()
          .setFooter(`Reported User ID: ${rUser.id} | Author ID: ${message.author.id}`);
    
let reportchannel = message.guild.channels.find(x => x.name === 'reports');
message.delete().catch(O_o=>{});
reportchannel.send({embed: reportEmbed});
    

let dmembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription(`${rUser} has been reported to the Staff Team of ${message.guild.name}.`);
try{
    await message.author.send(dmembed);
}catch(e){

    let errEmbed3 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription(`Your DMs are locked. I cannot send you the confirmation message.`);
      
    message.channel.send(errEmbed3);
}

  } catch(err) {
    catchErr(err)

  }

}

module.exports.help = {
    name: "report"

}
