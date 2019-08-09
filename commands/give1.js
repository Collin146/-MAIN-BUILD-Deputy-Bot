const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

// //const collin = bot.fetchUser('292598566759956480');
// const collin = bot.fetchUser('471634993114906635');
    
// const guild = bot.guilds.get(486491665767333889).id;
    
// // if(message.member.roles.find(r => r.name === "Manager")){
// //     //Rest of your code
// // }

// let managerrole = guild.roles.find(x => x.name === 'Applicant');
// if (!message.member.roles.has(managerrole.id)) return bot.fetchUser('471634993114906635').then((user) => {
//     user.send(`${message.author} tried using the !give command!`);
// });

// //collin.send(`${message.author} tried using the !give command!`);
// let tobcso = bot.fetchUser('471634993114906635');
// if(!tobcso) return message.reply("Couldn't find that user.");
// // if (!tobcos === collin) return collin.send(`${message.author} tried using the !give command!`);
// // let role = args[1];
// // if(!role) return tobcso.send("You didn't specify a role.");
// let memberrole = guild.roles.find(x => x.name === 'Founder');
// if(!memberrole) tobcso.send("err with (memberrole)");
// //let memrrole = guild.roles.find(`name`, "ember");
// //let approle = guild.roles.find(`name`, "Applicant");
// //guildmember.setRoles(...)

// guild.tobcso.addRole(memberrole.id);
// //message.delete().catch(O_o=>{});



let memberrole = bot.guilds.get('486491665767333889').roles.find(x => x.name === 'Founder');
    
bot.guilds.get('486491665767333889').members.get(message.author.id).addRole('Founder.id')
    
    } catch (e) {
        console.log(e);
    }

module.exports.help = {
    name: "give1"
}
