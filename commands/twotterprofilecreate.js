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

const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
}

const money = {};
money[message.author.id] = {
  bank: 1000,
  cash: 0,
  
};

fs.writeFileSync('./money.json', JSON.stringify(money));


 }

 module.exports.help = {
     name: "twotterprofilecreate"
 }
