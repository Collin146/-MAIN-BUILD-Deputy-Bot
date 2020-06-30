 const Discord = require("discord.js");
 const fs = require("fs");
 const errors = require("../utils/errors.js");

 module.exports.run = async (bot, message, args) => {

 const yes = bot.emojis.get("700713527576625205");
 const no = bot.emojis.get("700713478578634783"); 
 const twotter = bot.emojis.get("727159498686595072");

let profile = { 
    username: message.author.id,
    civfn: args[0],
    civln: args[1],
    age: args[2],
    bio: args.join(" ").slice(2)
};
 
let data = JSON.stringify(profile);
fs.writeFileSync('profiles.json', data);

 }

 module.exports.help = {
     name: "twotterprofilecreate"
 }
