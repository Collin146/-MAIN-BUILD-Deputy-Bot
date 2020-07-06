const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`tempmute.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !tempmute <user> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !tempmute <user> <time length>");
        return;
    }

//!tempmute @user 1s/m/h/d

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783"); 
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`Was not able to find that user!`);

if(!tomute) return message.channel.send(errEmbed);

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You cannot mute a Moderator or higher.`);

if(tomute.hasPermission("ADMINISTRATOR")) return message.channel.send(errEmbed2);
let muterole = message.guild.roles.find(x => x.name === 'Muted');
let memberrole = message.guild.roles.find(x => x.name === 'Member');
let approle = message.guild.roles.find(x => x.name === 'Applicant');
let recrole = message.guild.roles.find(x => x.name === 'Recruit');
//start of create role
if (!muterole){
    try{
        muterole = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });

    }catch(e){
        console.log(e.stack);
    }
}
//end of create role
let mutetime = args[1];

let errEmbed3 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't specify a time!`);

if(!mutetime) return message.channel.send(errEmbed3);

try {

await(tomute.addRole(muterole.id));
await(tomute.removeRole(memberrole.id));

} catch(err) {
}

try {

await(tomute.addRole(muterole.id));
await(tomute.removeRole(approle.id));

} catch(err) {
}

try {

await(tomute.addRole(muterole.id));
await(tomute.removeRole(recrole.id));
    
} catch(err) {  
}

geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}.`)
      .setFooter(`Mentioned User ID: ${tomute.id}`);

message.channel.send(geluktEmbed);

if(!message.member.roles.find(r => r.name === "Muted"))
    
setTimeout(function(){

tomute.removeRole(muterole.id);

    try {
     
    tomute.addRole(memberrole.id);

    } catch(err) {
    }

    try {
     
    tomute.addRole(approle.id);
    
    } catch(err) {
    }

    try {
     
    tomute.addRole(recrole.id);
        
    } catch(err) {
    }        

    geluktEmbed2 = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Done!**`)
    .setDescription(`<@${tomute.id}> has been ummuted.`)
    .setFooter(`Mentioned User ID: ${tomute.id}`);

    message.channel.send(geluktEmbed2);
}, ms(mutetime));

let ModEmbed = new Discord.RichEmbed()
.setTitle("**Command Used!**")
.setTimestamp()
.setColor("BLACK")
.setDescription([
    `**Command:** !tempmute`,
    `**Used On:** <@${tomute.id}>`,
    `**Used In:** ${message.channel}`,
    `**Used By:** ${message.author.username}`,
    `**Muted For:** ${mutetime}`
  ].join('\n'))
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

    } catch(err) {
        catchErr(err)

    }

}

module.exports.help = {
    name: "tempmute"
}
