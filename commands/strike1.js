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

let tostrike = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tostrike) return message.reply("Couldn't find that user.");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
if(tostrike.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute a Moderator or higher");
let strikerole = message.guild.roles.find(`name`, "Strike 1");
//start of create role
if (!strikerole){
    try{
        strikerole = await message.guild.createRole({
            name: "Strike 1",
            color: "#000000",
            permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(strikerole, {
            });
        });

    }catch(e){
        console.log(e.stack);
    }
}
//end of create role
let striketime = args[1];
if(!striketiime) return message.reply("You didn't specify a time!");

await(tostrike.addRole(strikerole.id));
message.reply(`<@${tostrike.id}> has been muted for ${ms(ms(striketime))}`);

setTimeout(function(){
    tostrike.removeRole(strikerole.id);
    message.channel.send(`<@${tostrike.id}> has been removed from Strike 1!`);
}, ms(striketime));


//end of module
}

module.exports.help = {
    name: "strike1"
}
