const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("Commands Help Menu")
.setColor("#00fff6")
.addField("!botinfo", "This shows you the information about the bot.")
.addField("!help", "This brings up the commands menu.")
.addField("!report <user> <reason>", "This reports the mentioned user to staff. ALWAYS GIVE A REASON!")
.addField("!serverinfo", "This shows you the information about the server.");

message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("Mod Help Menu")
.setColor("#00fff6")
.addField("!ban <user> <reason>", "This bans the user that is mentioned.") //PUT CLEAR, PREFIX, TEMPMUTE IF VIDEO DOESN'T
.addField("!kick <user> <reason>", "This kicks the user that is mentioned.")
.addField("!warn <user> <reason>", "This warns the user that is mentioned.")
.addField("!warnlevel <user>", "This shows how many times the mentioned user has been warned in total.")
.addField("!prefix <new prefix>", "This changes the prefix to the desired one.")
.addField("!clear <amount>", "This deletes the given amount of messages at once.")
.addField("!tempmute <user> <time length>", "This temporarily mutes the mentioned user for the given amount of time.")
.addField("!say <any word or sentence>", "This makes the bot say the given word or sentence.");
try{
    await message.author.send(modembed);
    message.react("👍");
}catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");

 }
}


}


module.exports.help = {
    name: "help"
}
