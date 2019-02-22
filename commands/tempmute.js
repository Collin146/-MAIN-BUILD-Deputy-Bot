const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

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

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute a Moderator or higher");
let muterole = message.guild.roles.find(`name`, "Muted");
let memberrole = message.guild.roles.find(`name`, "Member");
let approle = message.guild.roles.find(`name`, "Applicant");
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
if(!mutetime) return message.reply("You didn't specify a time!");

await(tomute.addRole(muterole.id));
await(tomute.removeRole(memberrole.id));
if (!memberrole) await(tomute.removeRole(approle.id));
message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

setTimeout(function(){
    tomute.removeRole(muterole.id);
    tomute.addRole(memberrole);
    if (!memberrole) tomute.addRole(approle.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
}, ms(mutetime));

let ModEmbed = new Discord.RichEmbed()
.setTitle("Tempmute command used!")
.setColor("RED")
.addField("Muted User", `<@${tomute.id}>`, true)
.addField("Muted In", message.channel, true)
.addField("Length", mutetime, true)
.addField("Muted By", message.author.username, true)
.setTimestamp()
.setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

let warnchannel = message.guild.channels.find(`name`, "modlog");
if(!warnchannel) return message.reply("Couldn't find channel");

warnchannel.send(ModEmbed);

//end of module
}

module.exports.help = {
    name: "tempmute"
}
