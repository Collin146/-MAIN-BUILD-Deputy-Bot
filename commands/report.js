const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
    }
    message.delete().catch(O_o=>{});
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.reply("Couldn't find that user").then(msg => msg.delete(5000));

let reason = args.join(" ").slice(22);

        message.delete().catch(O_o=>{});
if (!reason) return message.reply(`Please give a reason.`).then(msg => msg.delete(5000));

message.delete().catch(O_o=>{});

        let reportEmbed = new Discord.RichEmbed()
        .setTitle("**A user has been reported!**")
        .setColor("ORANGE")
        .addField("Reported User", `${rUser}`)
        .addField("Reported By", `${message.author}`)
        .addField("Channel", message.channel)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter(`Reported User ID: ${rUser.id} | Author ID: ${message.author.id}`);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.reply("Couldn't find reports channel,");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);

let dmembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setColor("#00fff6")
.setDescription(`${rUser} has been reported to the staff team of ${message.guild.name}.`);
try{
    await message.author.send(dmembed);
}catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");
}


}

module.exports.help = {
    name: "report"

}
