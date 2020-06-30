 const Discord = require("discord.js");
 const fs = require("fs");
 const errors = require("../utils/errors.js");
 const profiles = require("./profiles.json");

 module.exports.run = async (bot, message, args) => {

 const yes = bot.emojis.get("700713527576625205");
 const no = bot.emojis.get("700713478578634783"); 
 const twotter = bot.emojis.get("727159498686595072");

const profile = { 
    username: message.author.username,
    civfn: args[0],
    civln: args[1],
    age: args[2],
    bio: args.join(" ").slice(2),
}

const jsonString = JSON.stringify(profile)fs.writeFileSync('./profiles.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

 
 }

 module.exports.help = {
     name: "twotterprofilecreate"
 }
