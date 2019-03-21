const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let argembed = new Discord.RichEmbed()
  .setTitle("**Immunity (12)18 Info**")
  .setColor("BLACK")
  .addField("Information", "At the request of a law enforcement officer and in return for witness testimony, a district attorney may choose to grant a person either a transactional immunity or use and derivative use immunity. A transactional immunnity is a type of immunity where a person cannot be charged for a crimes revealed in his/her testimony. A use and derivative use immunity is a type of immunity which guarantees that a person's testimony cannot be used against him/her.");

  message.channel.send(argembed);

  }

module.exports.help = {
    name: "immunity"
}
