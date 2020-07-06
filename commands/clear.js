const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`clear.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !clear <amount>");
        return;
    }
    
    
//     if (args[0] > 100) {

//         let args100 = args[0] - 100
//     message.channel.bulkDelete(100)
//     message.channel.bulkDelete(args100).then(() => {
//         message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));

//         let ModEmbed = new Discord.RichEmbed()
//         .setTitle("**Moderation Command Used!**")
//         .setTimestamp()
//         .setColor("BLACK")
//         .setDescription([
//             `**The moderation command** !clear **has been used**`,
//             ` `,
//             `**Cleared Amount:** ${args}`,
//             ` `,
//             `**Used In:** ${message.channel}`,
//             ` `,
//             `**Used By:** ${message.author.username}`
//           ].join('\n'))
//         .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
        
//         let warnchannel = message.guild.channels.find(`name`, "modlog");
//         if(!warnchannel) return message.reply("Couldn't find channel");
        
//         warnchannel.send(ModEmbed);

// return;
//     });
// }

    //!clear 15

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 

    let errEmbed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${no} **Error!**`)
    .setDescription("You didn't specify what amount of messages.");

    if(!args[0]) return message.channel.send(errEmbed);
    
    let geluktEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`${yes} **Done!**`)
    .setDescription(`Cleared ${args[0]} messages.`)

//message.channel.bulkDelete(1);
    
    //const bulknum = args[0]
    
    //bulknum = bulknum + 1;

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Command Used!**")
    .setTimestamp()
    .setColor("BLACK")
    .setDescription([
        `**Command:** !clear`,
        `**Cleared Amount:** ${args}`,
        `**Used In:** ${message.channel}`,
        `**Used By:** ${message.author.username}`
      ].join('\n'))
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

    let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
    modlogchannel.send({embed: ModEmbed});
    
message.delete().catch(_O_o=>{});

await message.channel.bulkDelete(args[0]);

await message.channel.send(geluktEmbed).then(msg => msg.delete(5000));



} catch(err) {
    catchErr(err)

}
    
}


module.exports.help = {
    name: "clear"
}
