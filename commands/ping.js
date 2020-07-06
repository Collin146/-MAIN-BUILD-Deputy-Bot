const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  function catchErr (err, message) {

    let errchannel = bot.channels.find(x => x.name === 'errors');
    const warningsign = bot.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`ping.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

  try {

    const m = await message.channel.send("Ping?");

    m.edit(`Pong! **Latency is \`${m.createdTimestamp - message.createdTimestamp}ms\`. API Latency is \`${Math.round(bot.ping)}ms\`**`);

  } catch(err) {
    catchErr(err)

  }

  }

module.exports.help = {
   name: "ping"

}
