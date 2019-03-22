const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
    }
    message.delete().catch(O_o=>{});
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find that user").then(msg => msg.delete(5000));

let reason = args.join(" ").slice(22);

        message.delete().catch(O_o=>{});
if (!reason) return message.channel.send(`Please give a reason.`).then(msg => msg.delete(5000));

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
        if(!reportschannel) return message.channel.send("Couldn't find reports channel,");

let dmembed = new Discord.RichEmbed()
.setTitle("**Done!**")
.setDescription(`${rUser} has been reported to the staff team of ${message.guild.name}.`);
 
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);


}

module.exports.help = {
    name: "report"

}
