const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !prefix <desired prefix here>");
        return;
    }

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !prefix <new prefix>");
        return;
    }
    

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that.");
    if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix <desired prefix here>`);

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`);

    message.channel.send(sEmbed);

    let modlogembed = new Discord.RichEmbed()
    .setTitle("**Prefix command used!**")
    .addField("Used In", message.channel, true)
    .addField("Changed By", message.author.username, true)
    .addField("Changed To", `${args[0]}`, true)
    .setTimestamp()
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

    let warnchannel = message.guild.channels.find(`name`, "modlog");
    if(!warnchannel) return message.reply("Couldn't find channel");


    
    
}

module.exports.help = {
    name: "prefix"
}
