const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
// const warningsign = bot.emojis.get("572176403907215360");


//--
//Cmd handler end
//--

fs.readdir("./commands/", (err, files) => {

if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;


}

jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

});

});

fs.readdir("./charges/", (err, files) => {

    if(err) console.log(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    
    
    }
    
    jsfile.forEach((f, i) =>{
        let props2= require(`./charges/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props2.help.name, props2);
    
    });
    
    });

//--
//Cmd handler end
//--

//--
//welcome message begin
//--

bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find(x => x.name === 'welcome');

const rando_imgs = [
'https://cdn.discordapp.com/attachments/461540254441144326/575060389440651284/ELlfQHzH_EqodvyRcB_6jQ_0_0.jpg',
'https://cdn.discordapp.com/attachments/461540254441144326/575060395312676898/p6BODNzfD0StqIxd76Et1g_0_0.jpg',
'https://cdn.discordapp.com/attachments/461540254441144326/575060497091788813/oADhdqSfQUqltCx4DaPh0Q_0_0.jpg',
'https://cdn.discordapp.com/attachments/461540254441144326/575060528708190272/3eC2G8r4GEKQjjvQ4-FTWw_0_0.jpg',
]

const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
let memberTag = member.user.tag;
    
    let embed = new Discord.RichEmbed()
      .setTitle("**A new user has joined!**")
      .setColor("#00f4ef")
      .setDescription(`Welcome **${member}**, To Unity Roleplay, the best Roleplay Community for PS4!`)
      .setImage(`https://media.discordapp.net/attachments/493575328636207109/605415071094669322/Welcome_TOO.png`); // random is ${image}
  welcomechannel.send({embed});

  });

//--
//welcome message end
//--

//--
//left message begin
//--

bot.on("guildMemberRemove", async member => {
    console.log(`${member} left the server.`);
    
   let memberTag = member.user.tag;

let leftchannel = member.guild.channels.find(x => x.name === 'left-members');
    leftchannel.send(`**${member}** has left the server.`);
    

});

//--
//left message end
//--

//bot.on("ready", async () => {
// console.log(`${bot.user.username} is online!`);
// bot.user.setActivity("Global Roleplay PS4");

//});

//--
//prefix begin
//--

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

     if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
          prefixes: botconfig.prefix
      };
   }

    let prefix = prefixes[message.guild.id].prefixes;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if(message.content.startsWith(prefix)){
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    if(!message.content.startsWith(prefix))return;

    }
});


//--
//prefix end
//--

//—
//Link Detection Start
//--


bot.on(`message`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, 'https://', 'http://', '.com/', '.com', 'www.', 'https://www.', 'http://www.']
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {

            const warningsign = bot.emojis.get("572176403907215360");


            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.guild.roles.find(x => x.name === 'Staff Team')) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Links are not allowed to be sent!")
            .setFooter("Spamming links will result in a punishment!");

            await message.channel.send(linkembed);
        }
    } catch (e) {
        console.log(e);
    }
});

// // bot.on(`message`, async (message, args) => {
// //     const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
//     const containsDiscordUrl = message.test("/discord.gg\/\w*\d*");
//     if (containsDiscordUrl) { 
//    // try {
//         //if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
//            // let commrole = message.guild.roles.find('name', 'Community Manager'); 

//             // if (message.author.id === message.guild.ownerID) return;
//             // if (message.member.hasPermission("ADMINISTRATOR")) return;
//             // if (message.member.roles.find("name", "Content Creator")) return;
//             // if (message.member.roles.has(commrole.id)) return;
            
//             let linkembed2 = new Discord.RichEmbed()
//             .setTitle("**Discord Invite!**")
//             .setTimestamp()
//             .setColor("RED")
//             .setDescription([
//                 `**A invite for a Discord server has been sent in** ${message.channel}`,
//                 `**Server Name:** ${invite.guild.name}`,
//                 `**Channel ID:** ${invite.guild.id}`,
//                 `**Members:** ${invite.guild.memberCount}`
//                 `**Sent By:** ${message.member}`
//               ].join('\n'))

//             let modlogchannel = guild.channels.find(x => x.name === 'modlog');
//             modlogchannel.send({embed: linkembed2});
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
// });
// const message = "Hi, please join discord.gg/a2dsc for cool conversations";
// const containsDiscordUrl = message.test("/discord.gg\/\w*\d*");
// if (containsDiscordUrl) { 

//             let linkembed2 = new Discord.RichEmbed()
//             .setTitle("**Discord Invite!**")
//             .setTimestamp()
//             .setColor("RED")
//             .setDescription([
//                 `**A invite for a Discord server has been sent in** ${message.channel}`,
//                 `**Server Name:** ${containsDiscordUrl.guild.name}`,
//                 `**Channel ID:** ${containsDiscordUrl.guild.id}`,
//                 `**Members:** ${containsDiscordUrl.guild.memberCount}`
//                 `**Sent By:** ${containsDiscordUrl.member}`
//               ].join('\n'))

//             let modlogchannel = guild.channels.find(x => x.name === 'modlog');
//             modlogchannel.send({embed: linkembed2});

// }

//--      
//Link Detection End  
//--

//--
//mention detection begin
//--
bot.on(`message`, async message => {
    const bannedWords = [`@everyone`, `@Member`]
//  
    
    let staffrole = message.guild.roles.find(x => x.name === 'Staff Team');

    try {
            if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.get("572176403907215360");

            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
//             if (message.member.roles.has(weazelrole.id)) return;
            if (message.member.roles.has(staffrole.id)) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Do not mention everyone or member!")
            .setFooter("Mention spam will result in a punishment!");
           
            await message.channel.send(linkembed);
        }
    } catch (e) {
        console.log(e);
    }
});

//--
//mention detection end
//--

//--
//Banned Words Begin
//--

bot.on(`message`, async message => {
    const bannedWords = [`nigger`, `nigg`, `nogger`, `nagger`, `kanker`, `negro`, `negger`, `nigro`, `nignog`, `nig ger`, `nig  ger`, `ni99er`, `nog ger`, `n1gger`, `neger`, `nigga`, `nigge`, `n1gg3r`, `nigg3r`, `Nigger`, `Nigg`, `Nogger`, `Nagger`, `Kanker`, `Negro`, `Negger`, `Nigro`, `Nignog`, `Nig ger`, `Nig  ger`, `Ni99er`, `Nog ger`, `N1gger`, `Neger`, `Nigga`, `Nigge`, `N1gg3r`, `Nigg3r`, `Nibba`, `nibba`] 
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.get("572176403907215360");
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Those words are not allowed to be sent!")
            .setFooter("Continuing on sending those words will result in a punishment!");
           
            await message.channel.send(linkembed);
        }
    } catch (e) {
        console.log(e);
    }
});

//--
//Banned Words End
//--

//--
//Modlog events start
//--

bot.on('channelCreate', channel => {

   if (channel.type === 'dm') return;

    const ccembed = new Discord.RichEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setTitle("**Channel Created!**")
    .setDescription([
        `**Channel Name:** ${channel.name}`,
        `**Channel ID:** ${channel.id}`,
        `**Channel Type:** ${channel.type}`
      ].join('\n'))

let modlogchannel = channel.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ccembed});

});

bot.on('channelDelete', (channel) => {

    const cdembed = new Discord.RichEmbed()
     .setColor('RED')
    .setTimestamp()
    .setTitle("**Channel Deleted!**")
    .setDescription([
        `**Channel Name:** ${channel.name}`,
        `**Channel ID:** ${channel.id}`,
        `**Channel Type:** ${channel.type}`
      ].join('\n'))

let modlogchannel = channel.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: cdembed});

});

bot.on('guildBanAdd', (guild, user) => {

    const ubembed = new Discord.RichEmbed()
     .setColor('RED')
    .setTimestamp()
    .setThumbnail((user.displayAvatarURL))
    .setTitle("**User Banned!**")
    .setDescription([
        `**User's Name:** <@${user.id}>`,
        `**User's ID:** ${user.id}`
      ].join('\n'))

let modlogchannel = guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: ubembed});

    });

bot.on('guildBanRemove', (guild, user) => {

    const uuembed = new Discord.RichEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setThumbnail((user.displayAvatarURL))
    .setTitle("**User Unbanned!**")
    .setDescription([
        `**User's Name:** <@${user.id}>`,
        `**User's ID:** ${user.id}`
      ].join('\n'))

let modlogchannel = guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: uuembed});

});

bot.on('guildMemberUpdate', (oldMember, newMember, member) => {

    if (oldMember.nickname !== newMember.nickname) {

    const nickembed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Nickname Changed!**")
    .setDescription(`<@${oldMember.id}>'s **nickname was changed**`)
    .addField("Before", `${oldMember.nickname || "None"}`)
    .addField("After", `${newMember.nickname || "None"}`);

let modlogchannel = newMember.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: nickembed});

    }

    if (oldMember.roles.size < newMember.roles.size) {

        const roleminembed = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTimestamp()
        .setTitle("**Role Given!**")
        for (const role of newMember.roles.map(x => x.id)) {
			if (!oldMember.roles.has(role)) {
        roleminembed.setDescription([
           `<@${newMember.id}> has been given the \`${oldMember.guild.roles.get(role).name}\` role.`
         ].join('\n'))
   
   let modlogchannel = newMember.guild.channels.find(x => x.name === 'modlog');
   modlogchannel.send({embed: roleminembed});
   
        }
        }
    }

	if (oldMember.roles.size > newMember.roles.size) {
    
        const rolemaxembed = new Discord.RichEmbed()
        .setColor('RED')
        .setTimestamp()
        .setTitle("**Role Removed!**")
        for (const role of oldMember.roles.map(x => x.id)) {
			if (!newMember.roles.has(role)) {
        rolemaxembed.setDescription([
           `<@${newMember.id}> has been removed from the \`${oldMember.guild.roles.get(role).name}\` role.`
         ].join('\n'))
    
   let modlogchannel = newMember.guild.channels.find(x => x.name === 'modlog');
   modlogchannel.send({embed: rolemaxembed});

        }
    }
    }

});

bot.on("messageDelete", async message => {

      const delembed = new Discord.RichEmbed()
      .setColor("RED")
      .setTimestamp()
      .setTitle("**Deleted Message!**")
      .setDescription([
          `**A message from** ${message.author.tag} **has been deleted**`,
          ` `,
          `**Channel:** ${message.channel}`,
          ` `,
          `**Message:** ${message.content}`
        ].join('\n'));
  
    let channel = message.guild.channels.find(x => x.name === 'deleted-messages-log');
    channel.send({embed: delembed});
  });

bot.on('messageUpdate', (oldMessage, newMessage) => {

    const updembed = new Discord.RichEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Message Edited!**")
    .setDescription(`<@${oldMessage.author.id}>'s **message has been edited in** ${oldMessage.channel}`)
    .addField("Before", oldMessage.content || "Nothing")
    .addField("After", newMessage.content || "Nothing");

    if(oldMessage.author.bot) return;

let modlogchannel = oldMessage.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send(updembed);

});

bot.on('roleCreate', (role) => {

    const rcembed = new Discord.RichEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setTitle("**Role Created!**")
    .setDescription([
        `**Role Name:** ${role.name}`,
        `**Role ID:** ${role.id}`,
        `**Role Color:** ${role.hexColor}`
      ].join('\n'))

let modlogchannel = role.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send(rcembed);

});

bot.on('roleDelete', (role) => {

    const rdembed = new Discord.RichEmbed()
     .setColor('RED')
    .setTimestamp()
    .setTitle("**Role Deleted!**")
    .setDescription([
        `**Role Name:** ${role.name}`,
        `**Role ID:** ${role.id}`,
        `**Role Color:** ${role.hexColor}`
      ].join('\n'))

let modlogchannel = role.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send(rdembed);

});

bot.on('roleUpdate', (oldRole, newRole) => {

    if (oldRole.name !== newRole.name) {

    const rnembed = new Discord.RichEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Role Name Edited!**")
    .setDescription(`**The name of role** ${oldRole.name} **has been edited**`)
    .addField("Before", `${oldRole.name}`)
    .addField("After", `${newRole.name}`);

    let modlogchannel = oldRole.guild.channels.find(x => x.name === 'modlog');
    modlogchannel.send({embed: rnembed});

    }

    if (oldRole.hexColor !== newRole.hexColor) {

        const rhxembed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setTimestamp()
        .setTitle("**Role Color Edited!**")
        .setDescription([
            `**The color of role** ${oldRole.name} **has been edited**`,
            ` `,
            `${oldRole.hexColor} -> ${newRole.hexColor}`
          ].join('\n'));

       let modlogchannel = oldRole.guild.channels.find(x => x.name === 'modlog');
       modlogchannel.send({embed: rhxembed});
   

    }

});

bot.on('guildUpdate', (oldGuild, newGuild) => {

    if (oldGuild.name !== newGuild.name) {
   
    const gnembed = new Discord.RichEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Guild Name Edited!**")
    .setDescription(`**This guild's name has been edited**`)
    .addField("Before", `${oldGuild.name}`)
    .addField("After", `${newGuild.name}`);

let modlogchannel = oldGuild.channels.find(x => x.name === 'modlog');
modlogchannel.send(gnembed);

    }

	if (oldGuild.iconURL !== newGuild.iconURL) {

        const giembed = new Discord.RichEmbed()
        .setColor('BLACK')
       .setTimestamp()
       .setTitle("**Guild Icon Changed!**")
       .setDescription(`**This guild's icon has been edited**`)
       .addField("Before", `${oldGuild.iconURL || "None"}`)
       .addField("After", `${newGuild.iconURL || "None"}`);
   
   let modlogchannel = oldGuild.channels.find(x => x.name === 'modlog');
   modlogchannel.send(giembed);

    }

    if (oldGuild.owner.id !== newGuild.owner.id) {

        const goembed = new Discord.RichEmbed()
        .setColor('BLACK')
       .setTimestamp()
       .setTitle("**Guild Owner Transfership!**")
       .setDescription(`**This guild's ownership has been transferred**`)
       .addField("Before", `${oldGuild.owner.user.tag}`)
       .addField("After", `${newGuild.owner.user.tag}`);
   
   let modlogchannel = oldGuild.channels.find(x => x.name === 'modlog');
   modlogchannel.send(goembed);

    }

});

bot.on('channelUpdate', (oldChannel, newChannel) => {

	if (oldChannel.name !== newChannel.name) {

    const cuembed = new Discord.RichEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Channel Name Edited!**")
    .setDescription(`**The name of channel** ${oldChannel.name} **has been edited**`)
    .addField("Before", `${oldChannel.name}`)
    .addField("After", `${newChannel.name}`);

let modlogchannel = oldChannel.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: cuembed});

    }

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

     // User Joins a voice channel

  } else if(newUserChannel === undefined){

let memberrole = oldMember.find(x => x.name === 'Owner');
	 
	  oldMember.addRole(memberrole.id);
	  
    // User leaves a voice channel

  }
});

//-—
//Modlog events end
//-—
  
bot.login(botconfig.token);
