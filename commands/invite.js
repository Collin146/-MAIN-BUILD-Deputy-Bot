const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`invite.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

let mentionrole = message.guild.roles.find(x => x.name === 'Staff Team');
let servernum = args.join(" ");
const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
    
let errEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription(`Please provide a server number!`)
    
if(!servernum) return message.channel.send(errEmbed);


let invembed = new Discord.RichEmbed()
.setTitle("**Invite Request!**")
.setColor("GREEN")
.setDescription(`${message.author} needs an invite to the session of server \`${servernum}\`.`)
.setTimestamp()

let modlogchannel = message.guild.channels.find(x => x.name === 'needs-an-invite');
modlogchannel.send(`<@&${mentionrole.id}>`)
await modlogchannel.send({embed: invembed});

let doneembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription("The Staff Team has been notified!")

message.channel.send(doneembed);

} catch(err) {
    catchErr(err)

}

}

module.exports.help = {
    name: "invite"
}
