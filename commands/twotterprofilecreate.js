   const Discord = require("discord.js");
 const fs = require("fs");
 const errors = require("../utils/errors.js");

 module.exports.run = async (bot, message, args) => {

 const yes = bot.emojis.get("700713527576625205");
 const no = bot.emojis.get("700713478578634783l"); 
 const twotter = bot.emojis.get("727159498686595072");
 
 function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

const profile = { 
    username: message.author.username,
    civfn: args[0],
    civln: args[1],
    age: args[2],
    bio: args.join(" ").slice(2),
}

jsonReader("./profiles.json", (err, profile) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  
  fs.writeFile("./profiles.json", JSON.stringify(profile), err => {
    if (err) console.log("Error writing file:", err);
  });
});
 
 }

 module.exports.help = {
     name: "twotterprofilecreate"
 }
