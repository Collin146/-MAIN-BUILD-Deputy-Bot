const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
    }
    message.delete().catch(O_o=>{});
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.reply("Couldn't find that user").then(msg => msg.delete(5000));

let reason = args.slice(1).join(" ");

        message.delete().catch(O_o=>{});
if (!reason) return message.reply(`Please give a reason.`).then(msg => msg.delete(5000));

message.delete().catch(O_o=>{});
    
    const yes = bot.emojis.get("561106357131018273");
    const no = bot.emojis.get("561106624757104640");

        let reportEmbed = new Discord.RichEmbed()
        .setTitle("**A user has been reported!**")
        .setColor("ORANGE")
        .addField("Reported User", `${rUser}`)
        .addField("Reported By", `${message.author}`)
        .addField("Channel", message.channel)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter(`Reported User ID: ${rUser.id} | Author ID: ${message.author.id}`);
    
let reportchannel = message.guild.channels.find(x => x.name === 'reports');
message.delete().catch(O_o=>{});
reportchannel.send({embed: reportEmbed});
    

let dmembed = new Discord.RichEmbed()
.setTitle(`${yes} **Done!**`)
.setColor("GREEN")
.setDescription(`${rUser} has been reported to the Staff Team of ${message.guild.name}.`);
try{
    await message.author.send(dmembed);
}catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");
}


}

module.exports.help = {
    name: "report"

}
