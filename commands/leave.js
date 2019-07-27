const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 
    
bot.guilds.get(args.join("")).leave()

}

module.exports.help = {
    name: "leave"
}
