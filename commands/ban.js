const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
    if(args[0] === "help"){
        message.reply("Usage: !ban <user> <reason>");
        return;
    }
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !ban <user> <reason");
        return;
    }
//b
let bReason = args.slice(1).join(" ");
let user = message.mentions.users.first();

let member;
if (user) {
    member = await message.guild.fetchMember(user);
}

if (!user) {
    try {
        const fetchedMember = await message.guild.fetchMember(args.slice(0, 1).join(' '));
        if (!fetchedMember) return message.reply('User not found!');
        user = fetchedMember;
        user = user.user;
    } catch (error) {
        return message.reply("idcheck");
    }
}

if (user === message.author) return message.channel.send("You cannot ban yourself.");
if (!bReason) return message.reply("Please give a reason");

if (!member.bannable) return message.reply("You can't ban that user.");
message.guild.ban(user);

//e
  //  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]) || bot.fetchUser(args[0]));
  //  if(!bUser) return message.channel.send("Can't find user!");
    // let bReason = args.slice(1).join(" ");
    if(user.hasPermission("ADMINISTRATOR")) return message.channel.send("You cannot ban an Admin.");
    // if(!bReason) return message.reply("Please give a reason.");
    const yes = bot.emojis.get("561106357131018273");
    const no = bot.emojis.get("561106624757104640");

let geluktEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`<@${user.id}> has been banned!`)
      .setFooter(`Mentioned User ID: ${user.id}`);


   // let banEmbed = new Discord.RichEmbed()
   // .setDescription("A user has been banned")
   // .setColor("#ff6a00")
   // .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
   // .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
   // .addField("Banned In", message.channel)
   // .addField("Time", message.createdAt)
   // .addField("Reason", bReason);

   // message.guild.member(bUser).ban(bReason);
    message.channel.send(geluktEmbed);

    let ModEmbed = new Discord.RichEmbed()
    .setTitle("**Ban command used!**")
    .setColor("RED")
    .addField("Banned User", `<@${user.id}>`, true)
    .addField("Banned In", message.channel, true)
    .addField("Reason", bReason, true)
    .addField("Banned By", message.author.username, true)
    .setTimestamp()
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);

    let warnchannel = message.guild.channels.find(`name`, "modlog");
    if(!warnchannel) return message.reply("Couldn't find channel");

    warnchannel.send(ModEmbed);

    let dmembed =  new Discord.RichEmbed()
    .setTitle(`**You have been banned from ${message.guild.name}.**`)
    .setColor("#00fff6")
    .addField("Reason:", bReason);

    user.send(dmembed);

}

 module.exports.help = {
     name: "ban"


 }
