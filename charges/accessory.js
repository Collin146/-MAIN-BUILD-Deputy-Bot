const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "after"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Accessory After The Fact (10)08 Info**")
  .setColor("BLACK")
  .addField("Information", "A person who knowingly and willingly helps another person who had successfully committed a criminal act shall receive HALF the punishment issued to the person who committed the criminal act. Examples include harboring a fugitive, helping destroy or distort evidence, or assisting the person evade or avoid police custody.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Accessory After The Fact\' type: !accessory after the fact");

}

module.exports.help = {
    name: "accessory"
}
