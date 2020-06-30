 const Discord = require("discord.js");
 const fs = require("fs");
 const errors = require("../utils/errors.js");
 const profiles = require("./profiles.json");

 module.exports.run = async (bot, message, args) => {

 const yes = bot.emojis.get("700713527576625205");
 const no = bot.emojis.get("700713478578634783"); 
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
jsonReader("./profiles.json", (err, profiles) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(profiles.civfn); // => "Infinity Loop Drive"
});

const profile = { 
    username: message.author.username,
    civfn: args[0],
    civln: args[1],
    age: args[2],
    bio: args.join(" ").slice(2),
}

const jsonString = JSON.stringify(profile).fs.writeFileSync('./profiles.json', jsonString, err => {
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
