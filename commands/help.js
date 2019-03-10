const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setTitle("Commands Help Menu")
.setColor("#00fff6")
.addField("!botinfo", "This shows you the information about the bot.")
.addField("!help", "This brings up the commands menu.")
.addField("!report <user> <reason>", "This reports the mentioned user to staff. ALWAYS GIVE A REASON!")
.addField("!serverinfo", "This shows you the information about the server.")
.addField("!ticket <reason>", "This sends a ticket to the Staff Team with the reason you gave.");

message.channel.send(helpembed);

if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setTitle("Staff Team Help Menu")
.setColor("#00fff6")
.addBlankField(true)
.addField("**---------Moderation Commands---------**", "The basic moderation commands.")
.addField("!ban <user> <reason>", "This bans the user that is mentioned.") //PUT CLEAR, PREFIX, TEMPMUTE IF VIDEO DOESN'T
.addField("!kick <user> <reason>", "This kicks the user that is mentioned.")
.addField("!warn <user> <reason>", "This warns the user that is mentioned.")
.addField("!strike1 <user> <time length> <reason>", "This adds the Strike 1 role to the mentioned user and sends them a DM telling them that they have been striked.")
.addField("!strike2 <user> <time length> <reason>", "This adds the Strike 2 role to the mentioned user and sends them a DM telling them that they have been striked.")
.addField("!watchlist <user> <time length> <reason>", "This adds the Watchlist role to the mentioned user and sends them a DM telling them that they have been put on watchlist.")
.addField("!investigation <user>", "This removes all roles that a user has and adds the investigation role.")
.addField("!tempmute <user> <time length>", "This temporarily mutes the mentioned user for the given amount of time.")
.addBlankField(true)
.addField("**---------Managing Commands---------**", "The basic managing commands.")
.addField("!prefix <new prefix>", "This changes the prefix to the desired one.")
.addField("!clear <amount>", "This deletes the given amount of messages at once.")
.addField("!bcso <user>", "This adds the basic BCSO roles to the mentioned user.")
.addField("!sahp <user>", "This adds the basic SAHP roles to the mentioned user.")
.addField("!civilian <user>", "This adds the basic Civilian roles to the mentioned user.")
.addField("!lockdown", "This overrides the channel it's send messages permission to off for everyone")
.addField("!lockdown unlock", "This overrides the channel it's send messages permission to on for everyone")
.addField("!userinfo <user>", "This shows the mentioned user it's account information")
.addBlankField(true)
.addField("**---------Other Commands---------**", "The rest of the commands.")
.addField("!say <any word or sentence>", "This makes the bot say the given word or sentence.")
.addField("!userinfo <user>", "This shows the mentioned user it's account information")
.addField("!session <day> <time>", "This announces a session for the given day and time.")
.addField("!training <day> <time>", "This announces a training session for the given day and time.")
.addField("!briefing <time until briefing>", "This will announce briefing when the given time has ended.");
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
