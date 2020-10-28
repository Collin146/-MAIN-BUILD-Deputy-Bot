const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const ms = require("ms");
const AntiSpam = require('discord-anti-spam');
const bot = new Discord.Client({ disableMentions: 'everyone' });
bot.commands = new Discord.Collection();
process.setMaxListeners(Infinity);

function catchErr (err, message) {

let errchannel = bot.channels.cache.find(x => x.name === 'errors');
const warningsign = bot.emojis.cache.get("729725849343098900");

errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`index.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);

}

const yes = bot.emojis.cache.get("561106357131018273");
const no = bot.emojis.cache.get("561106624757104640");
// const warningsign = bot.emojis.cache.get("572176403907215360");

//--
//Cmd handler begin
//--

fs.readdir("./commands/", (err, files) => {

if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
let consolechannel = bot.channels.cache.find(x => x.name === 'console-log');
    console.log("Couldn't find commands.");
    consolechannel.send("Couldn't find commands. Changed status from up to crashed");
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
    let consolechannel = bot.channels.cache.find(x => x.name === 'console-log');
        console.log("Couldn't find commands.");
        consolechannel.send("Couldn't find commands. Changed status from up to crashed");
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

  bot.on("ready", async () => {

    let communityguild = bot.guilds.cache.get('669938084888182814');
    let testingguild = bot.guilds.cache.get('700639523272523776');
    let staffguild = bot.guilds.cache.get('644254160019128320');
    let portalguild = bot.guilds.cache.get('644301808680042506');
    let interviewguild = bot.guilds.cache.get('604420918634086411');
    let trainingguild = bot.guilds.cache.get('645035452956540929');
    let mainguild = bot.guilds.cache.get('644227663829139466');

    communityguild.members.fetch();
    testingguild.members.fetch();
    staffguild.members.fetch();
    portalguild.members.fetch();
    interviewguild.members.fetch();
    trainingguild.members.fetch();
    mainguild.members.fetch();

    });

//--
//welcome message begin
//--

 
bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.cache.find(channel => channel.name === 'welcome');
 
try {
//const rando_imgs = [
//'https://cdn.discordapp.com/attachments/461540254441144326/575060389440651284/ELlfQHzH_EqodvyRcB_6jQ_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060395312676898/p6BODNzfD0StqIxd76Et1g_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060497091788813/oADhdqSfQUqltCx4DaPh0Q_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060528708190272/3eC2G8r4GEKQjjvQ4-FTWw_0_0.jpg',
//]

member.guild.members.fetch()

//const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
let memberTag = member.user.tag;

// let welcuser = member.guild.fetchMember(member.id)

const imagetouse = ("https://cdn.discordapp.com/attachments/461540254441144326/689179495000703063/TRANSP_WELCOME-cutout.png")
    
    let embed = new Discord.MessageEmbed()
      .setTitle("**A new user has joined!**")
      .setColor("#00f4ef")
      .setDescription(`Welcome **${memberTag}**, To Deputy Roleplay, the best Roleplay Community for PS4!`)
      .setImage(`${imagetouse}`);
  welcomechannel.send({embed});

let memberrole = member.guild.roles.cache.find(role => role.name === 'New Member');

member.roles.add(memberrole.id);

try {

let applicantrole = member.guild.roles.cache.find(role => role.name === 'Applicant');

member.roles.add(applicantrole.id);

} catch (err) {
    console.log(err);

}

try {

let recruitrole = member.guild.roles.cache.find(role => role.name === 'Recruit');

member.roles.add(recruitrole.id);

}  catch (err) {
    console.log(err);
}

try {

let memberrole22 = member.guild.roles.cache.find(role => role.name === 'Member');
if (member.guild.id === "644227663829139466") return;

member.roles.add(memberrole22.id);
    
}  catch (err) {
        console.log(err);
}

} catch (err) {
    console.log(err);
}
  
});

//--
//welcome message end
//--

//--
//left message begin
//--

bot.on("guildMemberRemove", async member => {
  
try {

let memberTag = member.user.tag;

//let leftuser = member.guild.member(member) || member.guild.fetchMember(member)


if (member.guild.id === "644227663829139466") {

    let leftchannel = member.guild.channels.cache.find(channel => channel.name === 'left-members');
    leftchannel.send(`**${memberTag}**, (${member.nickname}) has left the server.`);

} else {

    let leftchannel = member.guild.channels.cache.find(channel => channel.name === 'left-members');
    leftchannel.send(`**${memberTag}** has left the server.`);

}
    
} catch (err) {
    console.log(err);
}

});

//--
//left message end
//--

bot.on("ready", async () => {
let consolechannel = bot.channels.cache.find(x => x.name === 'console-log');
console.log(`${bot.user.username} is online!`);
consolechannel.send(`Successfully loaded all files and detected ${bot.users.cache.size} user(s), ${bot.channels.cache.size} channel(s), & ${bot.guilds.cache.size} guild(s).`)
consolechannel.send(`${bot.user.username} is online!`)
bot.user.setActivity(`${bot.users.cache.size} users | !help`, { type: 'WATCHING' });

});

//--
//prefix begin
//--

bot.on("message", async message => {
 
try {

    if(message.author.bot)  {
        if(message.author.id !== "732901249720254485") return;
    }
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

} catch (err) {
    console.log(err);
}

});


//--
//prefix end
//--

//—
//Link Detection Start
//--
//`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, `https://`, `http://`, `.com/`, `.com`, `www.`, `https://www.`, `http://www.`, `https`, `http`

bot.on(`message`, async message => {

    try {

    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, `https://`, `http://`, `.com/`, `.com`, `www.`, `https://www.`, `http://www.`, `https`, `http`] 
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.cache.get("729725849343098900");
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.channel.id === '750827004525281430') return;
            await message.delete();
            
            let linkembed = new Discord.MessageEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Links are not allowed to be sent!")
            .setFooter("Continuing with sending links will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const modloglinkEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Link Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Link:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.cache.find(channel => channel.name === 'modlog');
            modlogchannel.send({embed: modloglinkEmbed});

        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    console.log(err);
}

});

// bot.on(`message`, async message => {

//     try {

//     const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, `https://`, `http://`, `.com/`, `.com`, `www.`, `https://www.`, `http://www.`, `https`, `http`]
//     try {
//         if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {

//             const warningsign = bot.emojis.cache.get("700843409526620180");


//             if (message.author.id === message.guild.ownerID) return;
//             if (message.member.hasPermission("ADMINISTRATOR")) return;
//             if (message.guild.roles.cache.find(role => role.name === 'Staff Team')) return;
//             await message.delete();

//             const modembed = new Discord.MessageEmbed()
//            .setColor('RED')
//            .setTimestamp()
//            .setTitle("**Link Posted!**")
//            .setDescription([
//                `**Sent By:** ${message.author.tag}`,
//                `**User's ID:** ${message.author.id}`,
//                `**Sent In:** ${message.channel}`,
//                `**Link:** ${message.content}`
//              ].join('\n'))
       
//        let modlogchannel = message.guild.channels.cache.find(channel => channel.name === 'modlog');
//        modlogchannel.send({embed: modembed});
            
//             let linkembed = new Discord.MessageEmbed()
//             .setTitle(`${warningsign} **Notice!**`)
//             .setColor("RED")
//             .setDescription("Links are not allowed to be sent!")
//             .setFooter("Spamming links will result in a punishment!");

//             await message.channel.send(linkembed);
//         }
//     } catch (e) {
//         console.log(e);
//     }

// } catch (err) {
//     console.log(err);
// }

// });

// // bot.on(`message`, async (message, args) => {
// //     const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
//     const containsDiscordUrl = message.test("/discord.gg\/\w*\d*");
//     if (containsDiscordUrl) { 
//    // try {
//         //if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
//            // let commrole = message.guild.roles.cache.find('name', 'Community Manager'); 

//             // if (message.author.id === message.guild.ownerID) return;
//             // if (message.member.hasPermission("ADMINISTRATOR")) return;
//             // if (message.member.roles.find("name", "Content Creator")) return;
//             // if (message.member.roles.has(commrole.id)) return;
            
//             let linkembed2 = new Discord.MessageEmbed()
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

//             let modlogchannel = guild.channels.cache.find(channel => channel.name === 'modlog');
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

//             let linkembed2 = new Discord.MessageEmbed()
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

//             let modlogchannel = guild.channels.cache.find(channel => channel.name === 'modlog');
//             modlogchannel.send({embed: linkembed2});

// }

//--      
//Link Detection End  
//--

//--
//mention detection begin
//--

bot.on(`message`, async message => {

    try {

    const bannedWords = [`@everyone`, `@Member`]
//    let staffrole = message.guild.roles.cache.find(role => role.name === 'Staff Team');

    try {
            if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.cache.get("729725849343098900");

            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.hasPermission("MANAGE_MESSAGES")) return;
//            if (message.member.roles.has(weazelrole.id)) return;
//            if (message.member.roles.has(staffrole.id)) return;
            await message.delete();
            
            let linkembed = new Discord.MessageEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Do not mention everyone or member!")
            .setFooter("Mentioning these roles can/will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const mentionEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Unauthorized Role Mention Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Message Contents:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.cache.find(channel => channel.name === 'modlog');
            modlogchannel.send({embed: mentionEmbed});

        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    console.log(err);
}

});

//--
//mention detection end
//--

//--
//Banned Words Begin
//--

bot.on(`message`, async message => {

    try {

    const bannedWords = [`niggers`, `n  i  g  g  e  r`, `n i g g e r`, `niggercoon`, `nigger`, `nigg`, `nogger`, `nagger`, `kanker`, `negro`, `negger`, `nigro`, `nignog`, `nig ger`, `nig  ger`, `ni99er`, `nog ger`, `n1gger`, `neger`, `nigga`, `nigge`, `n1gg3r`, `nigg3r`, `Nigger`, `Nigg`, `Nogger`, `Nagger`, `Kanker`, `Negro`, `Negger`, `Nigro`, `Nignog`, `Nig ger`, `Nig  ger`, `Ni99er`, `Nog ger`, `N1gger`, `Neger`, `Nigga`, `Nigge`, `N1gg3r`, `Nigg3r`, `Nibba`, `nibba`] 
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.cache.get("729725849343098900");
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            
            let linkembed = new Discord.MessageEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Please refrain from using offensive language!")
            .setFooter("Continuing on using offensive language will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const offlangEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Offensive Language Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Message Contents:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.cache.find(channel => channel.name === 'modlog');
            modlogchannel.send({embed: offlangEmbed});
        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    console.log(err);
}

});

//--
//Banned Words End
//--

//--
//Modlog events start
//--

bot.on('channelCreate', channel => {

    try {

   if (channel.type === 'dm') return;

    const ccembed = new Discord.MessageEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setTitle("**Channel Created!**")
    .setDescription([
        `**Channel Name:** ${channel.name}`,
        `**Channel ID:** ${channel.id}`,
        `**Channel Type:** ${channel.type}`
      ].join('\n'))

let modlogchannel = channel.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: ccembed});

} catch (err) {
    console.log(err);
}

});

bot.on('channelDelete', (channel) => {

    try {

    const cdembed = new Discord.MessageEmbed()
     .setColor('RED')
    .setTimestamp()
    .setTitle("**Channel Deleted!**")
    .setDescription([
        `**Channel Name:** ${channel.name}`,
        `**Channel ID:** ${channel.id}`,
        `**Channel Type:** ${channel.type}`
      ].join('\n'))

let modlogchannel = channel.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: cdembed});

} catch (err) {
    console.log(err);
}

});

bot.on('guildBanAdd', (guild, user) => {

    try { 

    const ubembed = new Discord.MessageEmbed()
     .setColor('RED')
    .setTimestamp()
    .setThumbnail((user.displayAvatarURL()))
    .setTitle("**User Banned!**")
    .setDescription([
        `**User's Name:** <@${user.id}>`,
        `**User's ID:** ${user.id}`
      ].join('\n'))

let modlogchannel = guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: ubembed});

} catch (err) {
    console.log(err);
}

    });

bot.on('guildBanRemove', (guild, user) => {


    try {
    
    const uuembed = new Discord.MessageEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setThumbnail((user.displayAvatarURL()))
    .setTitle("**User Unbanned!**")
    .setDescription([
        `**User's Name:** <@${user.id}>`,
        `**User's ID:** ${user.id}`
      ].join('\n'))

let modlogchannel = guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: uuembed});

} catch (err) {
    console.log(err);
}

});

bot.on('guildMemberUpdate', (oldMember, newMember, member) => {

    try {

    if (oldMember.nickname !== newMember.nickname) {

    const nickembed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Nickname Changed!**")
    .setDescription(`<@${oldMember.id}>'s **nickname was changed**`)
    .addField("Before", `${oldMember.nickname || "None"}`)
    .addField("After", `${newMember.nickname || "None"}`);

let modlogchannel = newMember.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: nickembed});

    }

    if (oldMember.roles.cache.size < newMember.roles.cache.size) {

        const roleminembed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTimestamp()
        .setTitle("**Role Given!**")
        for (const role of newMember.roles.cache.map(x => x.id)) {
			if (!oldMember.roles.cache.has(role)) {
        roleminembed.setDescription([
           `<@${newMember.id}> has been given the \`${oldMember.guild.roles.cache.get(role).name}\` role.`
         ].join('\n'))
   
   let modlogchannel = newMember.guild.channels.cache.find(channel => channel.name === 'modlog');
   modlogchannel.send({embed: roleminembed});
   
        }
        }
    }

	if (oldMember.roles.cache.size > newMember.roles.cache.size) {
    
        const rolemaxembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTimestamp()
        .setTitle("**Role Removed!**")
        for (const role of oldMember.roles.cache.map(x => x.id)) {
			if (!newMember.roles.cache.has(role)) {
        rolemaxembed.setDescription([
           `<@${newMember.id}> has been removed from the \`${oldMember.guild.roles.cache.get(role).name}\` role.`
         ].join('\n'))
    
   let modlogchannel = newMember.guild.channels.cache.find(channel => channel.name === 'modlog');
   modlogchannel.send({embed: rolemaxembed});

        }
    }
    }

} catch (err) {
    console.log(err);
}

});

bot.on("messageDelete", async message => {

    try {

      const delembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .setTitle("**Deleted Message!**")
      .setDescription([
          `**A message from** ${message.author.tag} **has been deleted**`,
          ` `,
          `**Channel:** ${message.channel}`,
          ` `,
          `**Message:** ${message.content || "Embed"}`
        ].join('\n'));
  
    let channel = message.guild.channels.cache.find(channel => channel.name === 'deleted-messages-log');
    channel.send({embed: delembed});

} catch (err) {
    console.log(err);
}

  });

bot.on('messageUpdate', (oldMessage, newMessage) => {

    try {

    const updembed = new Discord.MessageEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Message Edited!**")
    .setDescription(`<@${oldMessage.author.id}>'s **message has been edited in** ${oldMessage.channel}`)
    .addField("Before", oldMessage.content || "Nothing")
    .addField("After", newMessage.content || "Nothing");

    if(oldMessage.author.bot) return;

let modlogchannel = oldMessage.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send(updembed);

} catch (err) {
    console.log(err);
}

});

bot.on('roleCreate', (role) => {

    try {

    const rcembed = new Discord.MessageEmbed()
     .setColor('GREEN')
    .setTimestamp()
    .setTitle("**Role Created!**")
    .setDescription([
        `**Role Name:** ${role.name}`,
        `**Role ID:** ${role.id}`,
        `**Role Color:** ${role.hexColor}`
      ].join('\n'))

let modlogchannel = role.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send(rcembed);

} catch (err) {
    console.log(err);
}

});

bot.on('roleDelete', (role) => {

    try {

    const rdembed = new Discord.MessageEmbed()
     .setColor('RED')
    .setTimestamp()
    .setTitle("**Role Deleted!**")
    .setDescription([
        `**Role Name:** ${role.name}`,
        `**Role ID:** ${role.id}`,
        `**Role Color:** ${role.hexColor}`
      ].join('\n'))

let modlogchannel = role.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send(rdembed);

} catch (err) {
    console.log(err);
}

});

bot.on('roleUpdate', (oldRole, newRole) => {

    try {

    if (oldRole.name !== newRole.name) {

    const rnembed = new Discord.MessageEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Role Name Edited!**")
    .setDescription(`**The name of role** ${oldRole.name} **has been edited**`)
    .addField("Before", `${oldRole.name}`)
    .addField("After", `${newRole.name}`);

    let modlogchannel = oldRole.guild.channels.cache.find(channel => channel.name === 'modlog');
    modlogchannel.send({embed: rnembed});

    }

    if (oldRole.hexColor !== newRole.hexColor) {

        const rhxembed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTimestamp()
        .setTitle("**Role Color Edited!**")
        .setDescription([
            `**The color of role** ${oldRole.name} **has been edited**`,
            ` `,
            `${oldRole.hexColor} -> ${newRole.hexColor}`
          ].join('\n'));

       let modlogchannel = oldRole.guild.channels.cache.find(channel => channel.name === 'modlog');
       modlogchannel.send({embed: rhxembed});
   

    }

} catch (err) {
    console.log(err);
}

});

bot.on('guildUpdate', (oldGuild, newGuild) => {

    try {

    if (oldGuild.name !== newGuild.name) {
   
    const gnembed = new Discord.MessageEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Guild Name Edited!**")
    .setDescription(`**This guild's name has been edited**`)
    .addField("Before", `${oldGuild.name}`)
    .addField("After", `${newGuild.name}`);

let modlogchannel = oldguild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send(gnembed);

    }

	if (oldGuild.iconURL !== newGuild.iconURL) {

        const giembed = new Discord.MessageEmbed()
        .setColor('BLACK')
       .setTimestamp()
       .setTitle("**Guild Icon Changed!**")
       .setDescription(`**This guild's icon has been edited**`)
       .addField("Before", `${oldGuild.iconURL || "None"}`)
       .addField("After", `${newGuild.iconURL || "None"}`);
   
   let modlogchannel = oldguild.channels.cache.find(channel => channel.name === 'modlog');
   modlogchannel.send(giembed);

    }

    if (oldGuild.owner.id !== newGuild.owner.id) {

        const goembed = new Discord.MessageEmbed()
        .setColor('BLACK')
       .setTimestamp()
       .setTitle("**Guild Owner Transfership!**")
       .setDescription(`**This guild's ownership has been transferred**`)
       .addField("Before", `${oldGuild.owner.user.tag}`)
       .addField("After", `${newGuild.owner.user.tag}`);
   
   let modlogchannel = oldguild.channels.cache.find(channel => channel.name === 'modlog');
   modlogchannel.send(goembed);

    }

} catch (err) {
    console.log(err);
}

});

bot.on('channelUpdate', (oldChannel, newChannel) => {

    try {

	if (oldChannel.name !== newChannel.name) {

    const cuembed = new Discord.MessageEmbed()
     .setColor('BLACK')
    .setTimestamp()
    .setTitle("**Channel Name Edited!**")
    .setDescription(`**The name of channel** ${oldChannel.name} **has been edited**`)
    .addField("Before", `${oldChannel.name}`)
    .addField("After", `${newChannel.name}`);

let modlogchannel = oldChannel.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: cuembed});

    }
} catch (err) {
    console.log(err);
}

});

const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 3, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    warnEnabled: true,
    kickEnabled: false,
    banEnabled: false

});

bot.on('message', (message) => antiSpam.message(message)); 
 
antiSpam.on("warnAdd", async member => { 

    try {

    member.lastMessage.channel.messages.fetch({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    const warningsign = bot.emojis.cache.get("729725849343098900");

    let spamEmbed = new Discord.MessageEmbed()
    .setTitle(`${warningsign} **Notice!**`)
    .setColor("RED")
    .setDescription("Please refrain from spamming within the server!")
    .setFooter("Continuing with spamming will result in an automatic mute!");

    await member.lastMessage.channel.send(spamEmbed);

    member.lastMessage.channel.messages.fetch({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    const modlogspamEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTimestamp()
    .setTitle("**Message Spam Detected!**")
    .setDescription([
        `**User:** <@${member.id}>`,
        `**Channel:** ${member.lastMessage.channel}`,
        `**Action Taken:** Warning`
      ].join('\n'))

let modlogchannel = member.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: modlogspamEmbed});

} catch (err) {
    console.log(err);
}

});

const antiSpamMute = new AntiSpam({
    warnThreshold: 7, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 3, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 5000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    warnEnabled: true,
    kickEnabled: false,
    banEnabled: false

});

bot.on('message', (message) => antiSpamMute.message(message)); 
 
antiSpamMute.on("warnAdd", async member => { 

    try {

    member.lastMessage.channel.messages.fetch({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    member.lastMessage.channel.messages.fetch({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

const warningsign = bot.emojis.cache.get("729725849343098900");

let muterole = member.guild.roles.cache.find(role => role.name === 'Muted');
let memberrole = member.guild.roles.cache.find(role => role.name === 'Member');
let approle = member.guild.roles.cache.find(role => role.name === 'Applicant');
let recrole = member.guild.roles.cache.find(role => role.name === 'Recruit');
//start of create role
if (!muterole){
    try{
        muterole = await member.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions: []
        })
        member.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });

    }catch(e){
        console.log(e.stack);
    }
}
//end of create role

try {

await(member.roles.add(muterole.id));
await(member.roles.remove(memberrole.id));

} catch(err) {
}

try {

await(member.roles.add(muterole.id));
await(member.roles.remove(approle.id));

} catch(err) {
}

try {

await(member.roles.add(muterole.id));
await(member.roles.remove(recrole.id));
    
} catch(err) {  
}

geluktEmbed55 = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(`${warningsign} **Automatic Mute!**`)
      .setDescription(`<@${member.id}> has been muted for 4h due to spamming.`)
      .setFooter(`Mentioned User ID: ${member.id}`);

member.lastMessage.channel.send(geluktEmbed55);

if(!member.roles.find(r => r.name === "Muted"))
    
setTimeout(function(){

member.roles.remove(muterole.id);

    try {
     
    member.roles.add(memberrole.id);

    } catch(err) {
    }

    try {
     
    member.roles.add(approle.id);
    
    } catch(err) {
    }

    try {
     
    member.roles.add(recrole.id);
        
    } catch(err) {
    }        

}, ms("4h"));

const modlogspamEmbed2 = new Discord.MessageEmbed()
.setColor('RED')
.setTimestamp()
.setTitle("**Message Spam Detected!**")
.setDescription([
    `**User:** <@${member.id}>`,
    `**Channel:** ${member.lastMessage.channel}`,
    `**Action Taken:** Muted for 4 hours`
  ].join('\n'))

let modlogchannel = member.guild.channels.cache.find(channel => channel.name === 'modlog');
modlogchannel.send({embed: modlogspamEmbed2});

} catch (err) {
    console.log(err);
}

});


bot.on("ready", async () => {

    let fetchchannel = bot.channels.cache.find(x => x.name === 'session-voting');
    fetchchannel.messages.fetch({
        limit: 80,
       });

    const fetchedMessage = fetchchannel.messages.fetch("770020659929153566");

    });
    

    bot.on('messageReactionAdd', async (messageReaction, user) => {

        try {

        if (user.bot) return;
        
        if (messageReaction.message.id === "770020659929153566") {

            const yes = bot.emojis.cache.get("700713527576625205");
            const no = bot.emojis.cache.get("700713478578634783");
            const gno = bot.emojis.cache.get("759495234928902154");
            const drp1 = bot.emojis.cache.get("759125897953017857");
            const drp2 = bot.emojis.cache.get("759125936586883072");
            const drp3 = bot.emojis.cache.get("759125984967393330");
            const drp4 = bot.emojis.cache.get("759126011265941506");
            const drp5 = bot.emojis.cache.get("759126035215810592");
            const drp6 = bot.emojis.cache.get("759126060355813376");
            const drp7 = bot.emojis.cache.get("759126083781394444");

            const reactionLimit = 7;

            if (messageReaction.emoji.id === drp1.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                    
                    votingChannel.messages.fetch("770020695647846509")
                    .then(message => {
                        message.edit(`${yes} - Monday`);

                    });
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp2.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020696125603881")
                    .then(message => {
                        message.edit(`${yes} - Tuesday`);

                    });
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp3.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020697232900116")
                    .then(message => {
                        message.edit(`${yes} - Wednesday`);

                    });
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp4.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020697949863976")
                    .then(message => {
                        message.edit(`${yes} - Thursday`);

                    });
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp5.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020721766039591")
                    .then(message => {
                        message.edit(`${yes} - Friday`);

                    });
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp6.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020722445516880")
                    .then(message => {
                        message.edit(`${yes} - Saturday`);

                    });
                    
                   }
               });
            }

            }

            if (messageReaction.emoji.id === drp7.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.messages.fetch("770020723376259073")
                    .then(message => {
                        message.edit(`${yes} - Sunday`);

                    });

                   }
               });
            }

            }

            if (messageReaction.emoji.id === no.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'modlog');

                    messageReaction.message.channel.overwritePermissions(permRole.id, {
                        VIEW_CHANNEL: false,
                        READ_MESSAGE_HISTORY: false
                      });

                      let modlogEmbed = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setTitle(`**Session Voting System Disabled!**`)
                        .setTimestamp()
                        .setDescription(`<@${user.id}> has disabled the Session Voting System.`);

                        modlogChannel.send(modlogEmbed);

                }

            }

            if (messageReaction.emoji.id === yes.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'modlog');

                    messageReaction.message.channel.overwritePermissions(permRole.id, {
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                      });

                      let modlogEmbed2 = new Discord.MessageEmbed()
                      .setColor("GREEN")
                      .setTitle(`**Session Voting System Enabled!**`)
                      .setTimestamp()
                      .setDescription(`<@${user.id}> has enabled the Session Voting System.`);

                      modlogChannel.send(modlogEmbed2);

                }

            }

            if (messageReaction.emoji.id === gno.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.cache.find(role => role.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'modlog');

                    let fetchchannel = bot.channels.cache.find(x => x.name === 'session-voting');
                
                    fetchchannel.messages.fetch("770020659929153566")
                    .then(message => {
                        message.clearReactions() 
                        .then(() => message.react(drp1.id))
                        .then(() => message.react(drp2.id))
                        .then(() => message.react(drp3.id))
                        .then(() => message.react(drp4.id))
                        .then(() => message.react(drp5.id))
                        .then(() => message.react(drp6.id))
                        .then(() => message.react(drp7.id))
                        .then(() => message.react(gno.id))
                        .then(() => message.react(no.id))
                        .then(() => message.react(yes.id));
                    });

                    fetchchannel.messages.fetch("770020695647846509")
                    .then(message => {
                        message.edit(`${no} - Monday`);
                    });

                    fetchchannel.messages.fetch("770020696125603881")
                    .then(message => {
                        message.edit(`${no} - Tuesday`);
                    });
                    
                    fetchchannel.messages.fetch("770020697232900116")
                    .then(message => {
                        message.edit(`${no} - Wednesday`);
                    });

                    fetchchannel.messages.fetch("770020697949863976")
                    .then(message => {
                        message.edit(`${no} - Thursday`);
                    });

                    fetchchannel.messages.fetch("770020721766039591")
                    .then(message => {
                        message.edit(`${no} - Friday`);
                    });
                    
                    fetchchannel.messages.fetch("770020722445516880")
                    .then(message => {
                        message.edit(`${no} - Saturday`);
                    });

                    fetchchannel.messages.fetch("770020723376259073")
                    .then(message => {
                        message.edit(`${no} - Sunday`);
                    });

                      let modlogEmbed3 = new Discord.MessageEmbed()
                      .setColor("RED")
                      .setTitle(`**Session Voting System Reset!**`)
                      .setTimestamp()
                      .setDescription(`<@${user.id}> has reset the reactions & scheduling list of the Session Voting System.`);

                      modlogChannel.send(modlogEmbed3);

                }

            }

        }
    

    } catch (err) {
        console.log(err);
    } 
});

bot.on('messageReactionRemove', async (messageReaction, user) => {
    
    try {

        messageReaction.fetchUsers()
        .then(users => {  

        if (messageReaction.message.id === "770020659929153566") {
    
            const drp1 = bot.emojis.cache.get("759125897953017857");
            const drp2 = bot.emojis.cache.get("759125936586883072");
            const drp3 = bot.emojis.cache.get("759125984967393330");
            const drp4 = bot.emojis.cache.get("759126011265941506");
            const drp5 = bot.emojis.cache.get("759126035215810592");
            const drp6 = bot.emojis.cache.get("759126060355813376");
            const drp7 = bot.emojis.cache.get("759126083781394444");
    
            let logChannel = messageReaction.message.guild.channels.cache.find(channel => channel.name === 'vote-removal-log');
            const warningsign = bot.emojis.cache.get("729725849343098900");
        
        if (messageReaction.emoji.id === drp1.id) {

                    let voteEmbed1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
                    .setDescription([
                        `**User:** <@${user.id}>`,
                        `**User's ID:** ${user.id}`,
                        `**Vote of:** Monday`
                      ].join('\n'))
        
                      logChannel.send(voteEmbed1);

        }
    
        if (messageReaction.emoji.id === drp2.id) {

            let voteEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Tuesday`
              ].join('\n'))

              logChannel.send(voteEmbed2);

        }
    
        if (messageReaction.emoji.id === drp3.id) {

            let voteEmbed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Wednesday`
              ].join('\n'))

              logChannel.send(voteEmbed3);

        }
    
        if (messageReaction.emoji.id === drp4.id) {

            let voteEmbed4 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Thursday`
              ].join('\n'))

              logChannel.send(voteEmbed4);

        }
    
        if (messageReaction.emoji.id === drp5.id) {

            let voteEmbed5 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Friday`
              ].join('\n'))

              logChannel.send(voteEmbed5);

        }
    
        if (messageReaction.emoji.id === drp6.id) {

            let voteEmbed6 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Saturday`
              ].join('\n'))

              logChannel.send(voteEmbed6);

        }
    
        if (messageReaction.emoji.id === drp7.id) {

            let voteEmbed7 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${warningsign} **Vote/Reaction Removed!**`)
            .setDescription([
                `**User:** <@${user.id}>`,
                `**User's ID:** ${user.id}`,
                `**Vote of:** Sunday`
              ].join('\n'))

              logChannel.send(voteEmbed7);

        }
    }
});

} catch (err) {
    console.log(err);
}
    });

bot.on("ready", async () => {

    let fetchchannel = bot.channels.cache.find(x => x.name === 'self-roles');
    fetchchannel.messages.fetch({
        limit: 80,
       });
    
    let onemessage = fetchchannel.messages.fetch("741366961757356104");
    
    });
    
    bot.on('messageReactionAdd', async (messageReaction, user) => {
    
    try {
    
    if (messageReaction.message.id === "759132165354160178") {
    
        gMember = messageReaction.message.guild.members.get(user.id);
    
        const drpmember = bot.emojis.cache.get("756150199348363355");
        const drprecruit = bot.emojis.cache.get("756148907347542046");
        const drpapplicant = bot.emojis.cache.get("756149480750841866");
        const ps4 = bot.emojis.cache.get("756151452870639787");
        const xbox = bot.emojis.cache.get("756151503865118791");
        const ninswitch = bot.emojis.cache.get("756151539948716112");
        const pc = bot.emojis.cache.get("756151593409183836");
    
        let roledrpmember = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Member');
        let roledrprecruit = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Recruit');
        let roledrpapplicant = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Applicant');
        let roleps4 = messageReaction.message.guild.roles.cache.find(role => role.name === 'Playstation');
        let rolexbox = messageReaction.message.guild.roles.cache.find(role => role.name === 'Xbox');
        let rolepc = messageReaction.message.guild.roles.cache.find(role => role.name === 'PC');
        let roleninswitch = messageReaction.message.guild.roles.cache.find(role => role.name === 'Nintendo Switch');
    

        if (messageReaction.emoji.id === drpmember.id) {

            const yes = bot.emojis.cache.get("700713527576625205");
            const no = bot.emojis.cache.get("700713478578634783"); 

            let dmerrEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be a member of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let mainguild = bot.guilds.cache.get('644227663829139466');
          
          if (mainguild.members.has(user.id)) {
            gMember.roles.add(roledrpmember.id)

          } else {
            user.send(dmerrEmbed)
          }
        }
    
        if (messageReaction.emoji.id === drprecruit.id) {

            const yes = bot.emojis.cache.get("700713527576625205");
            const no = bot.emojis.cache.get("700713478578634783"); 

            let dmerrEmbed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be a recruit of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let trainguild = bot.guilds.cache.get('645035452956540929');
          
            if (trainguild.members.has(user.id)) {
                gMember.roles.add(roledrprecruit.id);

            } else {
                user.send(dmerrEmbed2)
            }
        }
    
        if (messageReaction.emoji.id === drpapplicant.id) {

            const yes = bot.emojis.cache.get("700713527576625205");
            const no = bot.emojis.cache.get("700713478578634783"); 

            let dmerrEmbed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be an applicant of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let interviewguild = bot.guilds.cache.get('604420918634086411');
          
          if (interviewguild.members.has(user.id)) {
            gMember.roles.add(roledrpapplicant.id);

          } else {
            user.send(dmerrEmbed3)
          }
        }
    
        if (messageReaction.emoji.id === ps4.id) {
            gMember.roles.add(roleps4.id);
        }
    
        if (messageReaction.emoji.id === xbox.id) {
            gMember.roles.add(rolexbox.id);
        }
    
        if (messageReaction.emoji.id === pc.id) {
            gMember.roles.add(rolepc.id);
        }
    
        if (messageReaction.emoji.id === ninswitch.id) {
            gMember.roles.add(roleninswitch.id);
        }
    }
    
    } catch (err) {
        console.log(err);
    }
    
    });
    
    bot.on('messageReactionRemove', async (messageReaction, user) => {
    
        try {
    
            if (messageReaction.message.id === "759132165354160178") {
    
            gMember = messageReaction.message.guild.members.get(user.id);
        
            const drpmember = bot.emojis.cache.get("756150199348363355");
            const drprecruit = bot.emojis.cache.get("756148907347542046");
            const drpapplicant = bot.emojis.cache.get("756149480750841866");
            const ps4 = bot.emojis.cache.get("756151452870639787");
            const xbox = bot.emojis.cache.get("756151503865118791");
            const ninswitch = bot.emojis.cache.get("756151539948716112");
            const pc = bot.emojis.cache.get("756151593409183836");
        
            let roledrpmember = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Member');
            let roledrprecruit = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Recruit');
            let roledrpapplicant = messageReaction.message.guild.roles.cache.find(role => role.name === 'DRP Applicant');
            let roleps4 = messageReaction.message.guild.roles.cache.find(role => role.name === 'Playstation');
            let rolexbox = messageReaction.message.guild.roles.cache.find(role => role.name === 'Xbox');
            let rolepc = messageReaction.message.guild.roles.cache.find(role => role.name === 'PC');
            let roleninswitch = messageReaction.message.guild.roles.cache.find(role => role.name === 'Nintendo Switch');
            
            if (messageReaction.emoji.id === drpmember.id) {
                gMember.roles.remove(roledrpmember.id);
            }
        
            if (messageReaction.emoji.id === drprecruit.id) {
                gMember.roles.remove(roledrprecruit.id);
            }
        
            if (messageReaction.emoji.id === drpapplicant.id) {
                gMember.roles.remove(roledrpapplicant.id);
            }
        
            if (messageReaction.emoji.id === ps4.id) {
                gMember.roles.remove(roleps4.id);
            }
        
            if (messageReaction.emoji.id === xbox.id) {
                gMember.roles.remove(rolexbox.id);
            }
        
            if (messageReaction.emoji.id === pc.id) {
                gMember.roles.remove(rolepc.id);
            }
        
            if (messageReaction.emoji.id === ninswitch.id) {
                gMember.roles.remove(roleninswitch.id);
            }
        }
    
    } catch (err) {
        console.log(err);
    }
        });

//  GIVE ROLES THROUGH JOINING VC

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel
//   if (oldMember.id !== '292598566759956480') return;
//   if (newMember.id !== '292598566759956480') return;
//   let memberrole = newMember.guild.roles.cache.find(role => role.name === 'Deputy Director');

//   if(oldUserChannel === undefined && newUserChannel !== undefined) {

// newMember.roles.add(memberrole.id);

//   } else if(newUserChannel === undefined){

// return;

//   }
// })

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel

// if(newUserChannel === undefined){

// let memberrole = oldMember.guild.roles.cache.find(role => role.name === 'Owner');
	 
// oldMember.roles.add(memberrole.id);
	
// }
//   });

//-—
//On Patrol Logging event start
//-—

bot.on('voiceStateUpdate', (oldMember, newMember) => {

try {

    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    const mainguild = bot.guilds.cache.get('644227663829139466')
    //if(!newMember.guild.id === mainguild) return;

    let patrolrole = mainguild.roles.cache.find(role => role.name === 'On Patrol');

    //const Briefingroom = newMember.guild.channels.fetch('689230310176456753')
    let Briefingroom = mainguild.channels.cache.find(channel => channel.name === 'Briefing Room');
    let Queue = mainguild.channels.cache.find(channel => channel.name === 'Queue');
    let ten1 = mainguild.channels.cache.find(channel => channel.name === '10-1 Channel');
    let RA1 = mainguild.channels.cache.find(channel => channel.name === 'Ride Along #1');
    let RA2 = mainguild.channels.cache.find(channel => channel.name === 'Ride Along #2');
    let RA3 = mainguild.channels.cache.find(channel => channel.name === 'Ride Along #3');
    let srutac = mainguild.channels.cache.find(channel => channel.name === 'SRU Tactical Channel');
    let fireops = mainguild.channels.cache.find(channel => channel.name === 'Fire Operations');
    let RTO = mainguild.channels.cache.find(channel => channel.name === 'R.T.O.');
    let nine11 = mainguild.channels.cache.find(channel => channel.name === '911 Centre');
    let Traffic1 = mainguild.channels.cache.find(channel => channel.name === 'Traffic Stop #1');
    let Traffic2 = mainguild.channels.cache.find(channel => channel.name === 'Traffic Stop #2');
    let Traffic3 = mainguild.channels.cache.find(channel => channel.name === 'Traffic Stop #3');
    let Traffic4 = mainguild.channels.cache.find(channel => channel.name === 'Traffic Stop #4');
    let Traffic5 = mainguild.channels.cache.find(channel => channel.name === 'Traffic Stop #5');
    let Scene1 = mainguild.channels.cache.find(channel => channel.name === 'On Scene #1');
    let Scene2 = mainguild.channels.cache.find(channel => channel.name === 'On Scene #2');
    let Scene3 = mainguild.channels.cache.find(channel => channel.name === 'On Scene #3');
    let Scene4 = mainguild.channels.cache.find(channel => channel.name === 'On Scene #4');
    let Scene5 = mainguild.channels.cache.find(channel => channel.name === 'On Scene #5');
    let Civ1 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #1');
    let Civ2 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #2');
    let Civ3 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #3');
    let Civ4 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #4');
    let Civ5 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #5');
    let Civ6 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #6');
    let Civ7 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #7');
    let Civ8 = mainguild.channels.cache.find(channel => channel.name === 'Civ Channel #8');

    if(oldUserChannel === undefined && newUserChannel !== undefined) {

    if(newUserChannel.id === Briefingroom.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Queue.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === ten1.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === RA1.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === RA2.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === RA3.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === srutac.id) newMember.roles.add(patrolrole.id);
    if(newUserChannel.id === fireops.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === RTO.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === nine11.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Traffic1.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Traffic2.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Traffic3.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Traffic4.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Traffic5.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Scene1.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Scene2.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Scene3.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Scene4.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Scene5.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ1.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ2.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ3.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ4.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ5.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ6.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ7.id) newMember.roles.add(patrolrole.id); 
    if(newUserChannel.id === Civ8.id) newMember.roles.add(patrolrole.id); 
    
    } else if(newUserChannel === undefined){
   
    if(oldUserChannel.id === Briefingroom.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Queue.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === ten1.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === RA1.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === RA2.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === RA3.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === srutac.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === fireops.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === RTO.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === nine11.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Traffic1.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Traffic2.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Traffic3.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Traffic4.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Traffic5.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Scene1.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Scene2.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Scene3.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Scene4.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Scene5.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ1.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ2.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ3.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ4.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ5.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ6.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ7.id) newMember.roles.remove(patrolrole.id); 
    if(oldUserChannel.id === Civ8.id) newMember.roles.remove(patrolrole.id); 

    } else if (oldUserChannel !== null && newUserChannel !== null) {

        if(newUserChannel.id === Briefingroom.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Queue.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === ten1.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === RA1.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === RA2.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === RA3.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === srutac.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === fireops.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === RTO.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === nine11.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Traffic1.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Traffic2.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Traffic3.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Traffic4.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Traffic5.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Scene1.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Scene2.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Scene3.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Scene4.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Scene5.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ1.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ2.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ3.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ4.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ5.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ6.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ7.id) newMember.roles.add(patrolrole.id);
        if(newUserChannel.id === Civ8.id) newMember.roles.add(patrolrole.id);

    if(newUserChannel.id === Briefingroom.id) return;
    if(newUserChannel.id === Queue.id) return;
    if(newUserChannel.id === ten1.id) return;
    if(newUserChannel.id === RA1.id) return;
    if(newUserChannel.id === RA2.id) return;
    if(newUserChannel.id === RA3.id) return;
    if(newUserChannel.id === srutac.id) return;
    if(newUserChannel.id === fireops.id) return;
    if(newUserChannel.id === RTO.id) return;
    if(newUserChannel.id === nine11.id) return;
    if(newUserChannel.id === Traffic1.id) return;
    if(newUserChannel.id === Traffic2.id) return;
    if(newUserChannel.id === Traffic3.id) return;
    if(newUserChannel.id === Traffic4.id) return;
    if(newUserChannel.id === Traffic5.id) return;
    if(newUserChannel.id === Scene1.id) return;
    if(newUserChannel.id === Scene2.id) return;
    if(newUserChannel.id === Scene3.id) return;
    if(newUserChannel.id === Scene4.id) return;
    if(newUserChannel.id === Scene5.id) return;
    if(newUserChannel.id === Civ1.id) return;
    if(newUserChannel.id === Civ2.id) return;
    if(newUserChannel.id === Civ3.id) return;
    if(newUserChannel.id === Civ4.id) return;
    if(newUserChannel.id === Civ5.id) return;
    if(newUserChannel.id === Civ6.id) return;
    if(newUserChannel.id === Civ7.id) return;
    if(newUserChannel.id === Civ8.id) return;

    newMember.roles.remove(patrolrole.id);

    }

} catch (err) {
  console.log(err);
}

  });

//-—
//On Patrol Logging event end
//-—

bot.on('message', message => {

    if (message.channel.type == "dm") {

      if (message.author.bot) return;

      message.author.send("I cannot reply to DM's. If you require support, please reach out to a staff member in any of the Deputy Roleplay servers.");

      let staffguild2 = bot.guilds.cache.get('644254160019128320');

      let dmmodlogembed = new Discord.MessageEmbed()
      .setTitle("**Direct Message Received!**")
      .setTimestamp()
      .setColor("BLACK")
      .setDescription([
          `**User:** ${message.author}, ${message.author.tag}`,
          `**User ID:** ${message.author.id}`,
          `**Date & Time:** ${moment.utc(message.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`,
          `**Message:** ${message.content}`
        ].join('\n'))
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      
      let fetchchannelstaff = staffguild2.channels.find(x => x.name === 'bot-dms-log');
      fetchchannelstaff.send({embed: dmmodlogembed});

      return;
    }

  });

//-—
//Modlog events end
//-—

bot.login(botconfig.token);
 
