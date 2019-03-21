const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "distance"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Following Distance (11.5)05 Info**")
.setColor("BLACK")
.addField("Type of Punishment", "infraction")
.addField("Punishment(s)", "$234");

message.channel.send(intimembed);

return;
}

message.reply("If you are looking for \'Following Distance\' type: !following distance.")

}

module.exports.help = {
    name: "following"
}
