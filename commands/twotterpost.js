const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 


const twotter = bot.emojis.get("727159498686595072");
//let messagecont = args.slice(1).join(" ");
let messagecont = args.join(" ");

message.delete().catch();

const postimage = ("https://media.discordapp.net/attachments/511913643923996683/727158652888154163/image1.png")
    
    let postembed = new Discord.RichEmbed()
      .setTitle("**New Twotter Post**")
      .setColor("#0173ce")
      .setDescription(`${twotter} > ${messagecont}`)
      .setImage(`${postimage}`);
      
  message.channel.send({postembed});

}

module.exports.help = {
    name: "twotterpost"
}
