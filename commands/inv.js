 const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

 let invite = await bot.guilds.get('486491665767333889').createInvite({
    maxAge: 10 * 60 * 1000 //maximum time for the invite, in milliseconds
    maxUses: 1 //maximum times it can be used
  }, `Requested with command by ${message.author.tag}`).catch(console.log);

let Collin = bot.fetchUser('471634993114906635');
	
Collin.dm(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");

}

module.exports.help = {
    name: "inv"
}
