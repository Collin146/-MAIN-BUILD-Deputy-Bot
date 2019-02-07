const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let role = message.guild.roles.find(r => r.name === "Team Mystic");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();

// or the person who made the command: let member = message.member;

// Add the role!
message.member.addRole(role).catch(console.error);

// Remove a role!
message.member.removeRole(role).catch(console.error);
}


module.exports.help = {
    name: "strike"

}
