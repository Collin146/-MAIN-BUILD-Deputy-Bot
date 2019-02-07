// const Discord = require("discord.js");
// const errors = require("../utils/errors.js");

// module.exports.run = async (bot, message, args) => { 

//     if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
//     if(args[0] === "help"){
//         message.reply("Usage: !<Strike 1 or 2> <user> <reason>");
//         return;
//     }

//     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
//     if(args[0] == "help"){
//         message.reply("Usage: !<Strike 1 or 2> <user> <reason>");
//         return;
//     }
    

// let role = message.guild.roles.find(r => r.name === "Strike 1");

// // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
// let member = message.mentions.members.first();

// // or the person who made the command: let member = message.member;

// // Add the role!
// message.member.addRole(role)
//   .then(console.log)
//   .catch(console.error);

// // Remove a role!
// message.member.removeRole(role).catch(console.error);
// }


// module.exports.help = {
//     name: "strike"

// }
