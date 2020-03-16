const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let mentionrole = message.guild.roles.find(x => x.name === 'Staff Team');
let servernum = args.join(" ");
const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
    
let nonexist = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${no} **Error!**`)
      .setDescription(`Please provide a server number!`)
      .setFooter(`Message ID: ${message.id}`);
    
if (!servernum) message.channel.send(nonexist);
    return;


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

}

module.exports.help = {
    name: "invite"
}
