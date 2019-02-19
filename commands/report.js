const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
        message.reply("Usage: !report <user> <reason>");
        return;
    }
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Couldn't find user.");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#ff6a00")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Reason", reason)
        .setTimestamp()
        .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel,");


        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);


}

module.exports.help = {
    name: "report"

}
