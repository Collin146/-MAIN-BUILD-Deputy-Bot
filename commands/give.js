const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

const collin = bot.fetchUser('292598566759956480');

// if(message.member.roles.find(r => r.name === "Manager")){
//     //Rest of your code
// }

let managerrole = message.guild.roles.find(`name`, `Manager`);
if (!message.member.roles.has(allowedRole.id)) return collin.send(`${message.author} tried using the !give command!`);
let tobcso = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tobcso) return message.reply("Couldn't find that user.");
// if (!tobcos === collin) return collin.send(`${message.author} tried using the !give command!`);
// let role = args[1];
// if(!role) return tobcso.send("You didn't specify a role.");
let memberrole = message.guild.roles.find(`name`, `Owner`);
if(!memberrole) tobcso.send("err with (memberrole)");
//let memrrole = message.guild.roles.find(`name`, "ember");
//let approle = message.guild.roles.find(`name`, "Applicant");
//guildmember.setRoles(...)

tobcso.addRole(memberrole.id);
message.delete().catch(O_o=>{});

}

module.exports.help = {
    name: "give"
}
