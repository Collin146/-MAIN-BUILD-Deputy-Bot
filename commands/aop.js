const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args, channel) => {

function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`aop.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }
        
try {
    
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
const warningsign = bot.emojis.get("729725849343098900");

const mainguild = bot.guilds.get('644227663829139466')

let AOPchannel = mainguild.channels.find(x => x.id === '806204219321090069');

message.delete().catch(_O_o=>{})

if(args[0] === "bc"){

AOPchannel.edit({ name: 'Current AOP: BC' })

let dmembed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${warningsign} **Notice!**`)
.setDescription(`Per ${message.author}, AOP has been changed to Blaine County! Please finish your scenarios and head to the new AOP.`);

message.guild.members.forEach(member => {
    if (member.roles.has('707919907311976448') && !member.user.bot) member.send(dmembed)
  });

  return;
}

if(args[0] === "ss&s"){

    AOPchannel.edit({ name: 'Current AOP: SS&S' })
    
    let dmembed2 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${warningsign} **Notice!**`)
    .setDescription(`Per ${message.author}, AOP has been changed to Sandy Shores & Surrounding! Please finish your scenarios and head to the new AOP.`);

    message.guild.members.forEach(member => {
        if (member.roles.has('707919907311976448') && !member.user.bot) member.send(dmembed2)
      });
    
      return;
    }

} catch(err) {
     catchErr(err) 
    
     }
    
    }

 module.exports.help = {
     name: "aop"
 }
