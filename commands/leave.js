const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

const theguild = message.guild.id

message.guild.leave(theguild)

}

module.exports.help = {
    name: "leave"

}
