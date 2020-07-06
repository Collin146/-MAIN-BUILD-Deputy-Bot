const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`prefix.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

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
    
    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    let errEmbed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${no} **Error!**`)
    .setDescription(`You didn't provide a new prefix!`);

    if (!args[0]) return message.channel.send(errEmbed);

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle(`${yes} Prefix Set!`)
    .setDescription(`Set to ${args[0]}`);

    message.channel.send(sEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**Command:** !prefix`,
        `**Used In:** ${message.channel}`,
        `**Used By:** ${message.author.username}`,
        `**Changed To:** ${args[0]}`,
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
    
let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ModEmbed});

    } catch(err) {
        catchErr(err)

    }    

}

module.exports.help = {
    name: "prefix"
}
