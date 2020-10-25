const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const ms = require("ms");
const AntiSpam = require('discord-anti-spam');
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();
process.setMaxListeners(Infinity);

function catchErr (err, message) {

let errchannel = bot.channels.find(x => x.name === 'errors');
const warningsign = bot.emojis.get("729725849343098900");

errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`index.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);

}

const yes = bot.emojis.get("561106357131018273");
const no = bot.emojis.get("561106624757104640");
// const warningsign = bot.emojis.get("572176403907215360");

//--
//Cmd handler begin
//--

fs.readdir("./commands/", (err, files) => {

if(err) console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
let consolechannel = bot.channels.find(x => x.name === 'console-log');
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
    let consolechannel = bot.channels.find(x => x.name === 'console-log');
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

    let communityguild = bot.guilds.get('669938084888182814');
    let testingguild = bot.guilds.get('700639523272523776');
    let staffguild = bot.guilds.get('644254160019128320');
    let portalguild = bot.guilds.get('644301808680042506');
    let interviewguild = bot.guilds.get('604420918634086411');
    let trainingguild = bot.guilds.get('645035452956540929');
    let mainguild = bot.guilds.get('644227663829139466');

    communityguild.fetchMembers();
    testingguild.fetchMembers();
    staffguild.fetchMembers();
    portalguild.fetchMembers();
    interviewguild.fetchMembers();
    trainingguild.fetchMembers();
    mainguild.fetchMembers();

    });

//--
//welcome message begin
//--

 
bot.on('guildMemberAdd', member => {
	let welcomechannel = member.guild.channels.find(x => x.name === 'welcome');
 
try {
//const rando_imgs = [
//'https://cdn.discordapp.com/attachments/461540254441144326/575060389440651284/ELlfQHzH_EqodvyRcB_6jQ_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060395312676898/p6BODNzfD0StqIxd76Et1g_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060497091788813/oADhdqSfQUqltCx4DaPh0Q_0_0.jpg',
//'https://cdn.discordapp.com/attachments/461540254441144326/575060528708190272/3eC2G8r4GEKQjjvQ4-FTWw_0_0.jpg',
//]

member.guild.fetchMembers()

//const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
let memberTag = member.user.tag;

// let welcuser = member.guild.fetchMember(member.id)

const imagetouse = ("https://cdn.discordapp.com/attachments/461540254441144326/689179495000703063/TRANSP_WELCOME-cutout.png")
    
    let embed = new Discord.RichEmbed()
      .setTitle("**A new user has joined!**")
      .setColor("#00f4ef")
      .setDescription(`Welcome **${memberTag}**, To Deputy Roleplay, the best Roleplay Community for PS4!`)
      .setImage(`${imagetouse}`);
  welcomechannel.send({embed});

let memberrole = member.guild.roles.find(x => x.name === 'New Member');

member.addRole(memberrole);

try {

let applicantrole = member.guild.roles.find(x => x.name === 'Applicant');

member.addRole(applicantrole);

} catch (err) {
    catchErr(err);

}

try {

let recruitrole = member.guild.roles.find(x => x.name === 'Recruit');

member.addRole(recruitrole);

}  catch (err) {
    catchErr(err);
}

try {

let memberrole22 = member.guild.roles.find(x => x.name === 'Member');
if (member.guild.id === "644227663829139466") return;

member.addRole(memberrole22);
    
}  catch (err) {
        catchErr(err);
}

} catch (err) {
    catchErr(err);
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

    let leftchannel = member.guild.channels.find(x => x.name === 'left-members');
    leftchannel.send(`**${memberTag}**, (${member.nickname}) has left the server.`);

} else {

    let leftchannel = member.guild.channels.find(x => x.name === 'left-members');
    leftchannel.send(`**${memberTag}** has left the server.`);

}
    
} catch (err) {
    catchErr(err);
}

});

//--
//left message end
//--

bot.on("ready", async () => {
let consolechannel = bot.channels.find(x => x.name === 'console-log');
console.log(`${bot.user.username} is online!`);
consolechannel.send(`Successfully loaded all files and detected ${bot.users.size} user(s), ${bot.channels.size} channel(s), & ${bot.guilds.size} guild(s).`)
consolechannel.send(`${bot.user.username} is online!`)
bot.user.setActivity(`${bot.users.size} users | !help`, { type: 'WATCHING' });

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
    catchErr(err);
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
            const warningsign = bot.emojis.get("729725849343098900");
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.channel.id === '750827004525281430') return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Links are not allowed to be sent!")
            .setFooter("Continuing with sending links will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const modloglinkEmbed = new Discord.RichEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Link Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Link:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
            modlogchannel.send({embed: modloglinkEmbed});

        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    catchErr(err);
}

});

// bot.on(`message`, async message => {

//     try {

//     const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, `https://`, `http://`, `.com/`, `.com`, `www.`, `https://www.`, `http://www.`, `https`, `http`]
//     try {
//         if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {

//             const warningsign = bot.emojis.get("700843409526620180");


//             if (message.author.id === message.guild.ownerID) return;
//             if (message.member.hasPermission("ADMINISTRATOR")) return;
//             if (message.guild.roles.find(x => x.name === 'Staff Team')) return;
//             await message.delete();

//             const modembed = new Discord.RichEmbed()
//            .setColor('RED')
//            .setTimestamp()
//            .setTitle("**Link Posted!**")
//            .setDescription([
//                `**Sent By:** ${message.author.tag}`,
//                `**User's ID:** ${message.author.id}`,
//                `**Sent In:** ${message.channel}`,
//                `**Link:** ${message.content}`
//              ].join('\n'))
       
//        let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
//        modlogchannel.send({embed: modembed});
            
//             let linkembed = new Discord.RichEmbed()
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
//     catchErr(err);
// }

// });

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

    try {

    const bannedWords = [`@everyone`, `@Member`]
//    let staffrole = message.guild.roles.find(x => x.name === 'Staff Team');

    try {
            if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            const warningsign = bot.emojis.get("729725849343098900");

            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.hasPermission("MANAGE_MESSAGES")) return;
//            if (message.member.roles.has(weazelrole.id)) return;
//            if (message.member.roles.has(staffrole.id)) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Do not mention everyone or member!")
            .setFooter("Mentioning these roles can/will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const mentionEmbed = new Discord.RichEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Unauthorized Role Mention Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Message Contents:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
            modlogchannel.send({embed: mentionEmbed});

        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    catchErr(err);
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
            const warningsign = bot.emojis.get("729725849343098900");
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Please refrain from using offensive language!")
            .setFooter("Continuing on using offensive language will result in disciplinary action!");
           
            await message.channel.send(linkembed);

            const offlangEmbed = new Discord.RichEmbed()
            .setColor('RED')
            .setTimestamp()
            .setTitle("**Offensive Language Detected!**")
            .setDescription([
            `**User:** <@${message.author.id}>`,
            `**Channel:** ${message.channel}`,
            `**Action Taken:** Deleted & Warned`,
            `**Message Contents:** ${message.content}`
            ].join('\n'))

            let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');
            modlogchannel.send({embed: offlangEmbed});
        }
    } catch (e) {
        console.log(e);
    }

} catch (err) {
    catchErr(err);
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

} catch (err) {
    catchErr(err);
}

});

bot.on('channelDelete', (channel) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('guildBanAdd', (guild, user) => {

    try { 

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

} catch (err) {
    catchErr(err);
}

    });

bot.on('guildBanRemove', (guild, user) => {


    try {
    
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

} catch (err) {
    catchErr(err);
}

});

bot.on('guildMemberUpdate', (oldMember, newMember, member) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on("messageDelete", async message => {

    try {

      const delembed = new Discord.RichEmbed()
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
  
    let channel = message.guild.channels.find(x => x.name === 'deleted-messages-log');
    channel.send({embed: delembed});

} catch (err) {
    catchErr(err);
}

  });

bot.on('messageUpdate', (oldMessage, newMessage) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('roleCreate', (role) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('roleDelete', (role) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('roleUpdate', (oldRole, newRole) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('guildUpdate', (oldGuild, newGuild) => {

    try {

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

} catch (err) {
    catchErr(err);
}

});

bot.on('channelUpdate', (oldChannel, newChannel) => {

    try {

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
} catch (err) {
    catchErr(err);
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

    member.lastMessage.channel.fetchMessages({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    const warningsign = bot.emojis.get("729725849343098900");

    let spamEmbed = new Discord.RichEmbed()
    .setTitle(`${warningsign} **Notice!**`)
    .setColor("RED")
    .setDescription("Please refrain from spamming within the server!")
    .setFooter("Continuing with spamming will result in an automatic mute!");

    await member.lastMessage.channel.send(spamEmbed);

    member.lastMessage.channel.fetchMessages({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    const modlogspamEmbed = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setTitle("**Message Spam Detected!**")
    .setDescription([
        `**User:** <@${member.id}>`,
        `**Channel:** ${member.lastMessage.channel}`,
        `**Action Taken:** Warning`
      ].join('\n'))

let modlogchannel = member.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: modlogspamEmbed});

} catch (err) {
    catchErr(err);
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

    member.lastMessage.channel.fetchMessages({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

    member.lastMessage.channel.fetchMessages({
        limit: 80,
       }).then((messages) => {
    const filterBy = member ? member.id : bot.member.id;
    const amount = ("8");
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);

    member.lastMessage.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });

const warningsign = bot.emojis.get("729725849343098900");

let muterole = member.guild.roles.find(x => x.name === 'Muted');
let memberrole = member.guild.roles.find(x => x.name === 'Member');
let approle = member.guild.roles.find(x => x.name === 'Applicant');
let recrole = member.guild.roles.find(x => x.name === 'Recruit');
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

await(member.addRole(muterole.id));
await(member.removeRole(memberrole.id));

} catch(err) {
}

try {

await(member.addRole(muterole.id));
await(member.removeRole(approle.id));

} catch(err) {
}

try {

await(member.addRole(muterole.id));
await(member.removeRole(recrole.id));
    
} catch(err) {  
}

geluktEmbed55 = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`${warningsign} **Automatic Mute!**`)
      .setDescription(`<@${member.id}> has been muted for 4h due to spamming.`)
      .setFooter(`Mentioned User ID: ${member.id}`);

member.lastMessage.channel.send(geluktEmbed55);

if(!member.roles.find(r => r.name === "Muted"))
    
setTimeout(function(){

member.removeRole(muterole.id);

    try {
     
    member.addRole(memberrole.id);

    } catch(err) {
    }

    try {
     
    member.addRole(approle.id);
    
    } catch(err) {
    }

    try {
     
    member.addRole(recrole.id);
        
    } catch(err) {
    }        

}, ms("4h"));

const modlogspamEmbed2 = new Discord.RichEmbed()
.setColor('RED')
.setTimestamp()
.setTitle("**Message Spam Detected!**")
.setDescription([
    `**User:** <@${member.id}>`,
    `**Channel:** ${member.lastMessage.channel}`,
    `**Action Taken:** Muted for 4 hours`
  ].join('\n'))

let modlogchannel = member.guild.channels.find(x => x.name === 'modlog');
modlogchannel.send({embed: modlogspamEmbed2});

} catch (err) {
    catchErr(err);
}

});


bot.on("ready", async () => {

    let fetchchannel = bot.channels.find(x => x.name === 'session-voting');
    fetchchannel.fetchMessages({
        limit: 80,
       });

    const fetchedMessage = fetchchannel.fetchMessage("770020659929153566");

    });
    

    bot.on('messageReactionAdd', async (messageReaction, user) => {

        try {

        if (user.bot) return;
        
        if (messageReaction.message.id === "770020659929153566") {

            const yes = bot.emojis.get("700713527576625205");
            const no = bot.emojis.get("700713478578634783");
            const gno = bot.emojis.get("759495234928902154");
            const drp1 = bot.emojis.get("759125897953017857");
            const drp2 = bot.emojis.get("759125936586883072");
            const drp3 = bot.emojis.get("759125984967393330");
            const drp4 = bot.emojis.get("759126011265941506");
            const drp5 = bot.emojis.get("759126035215810592");
            const drp6 = bot.emojis.get("759126060355813376");
            const drp7 = bot.emojis.get("759126083781394444");

            const reactionLimit = 7;

            if (messageReaction.emoji.id === drp1.id) {

                if (messageReaction.count > reactionLimit) {

                    messageReaction.fetchUsers()
                    .then(users => {  

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                    
                    votingChannel.fetchMessage("770020695647846509")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020696125603881")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020697232900116")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020697949863976")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020721766039591")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020722445516880")
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

                let mentionrole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                let votingChannel = messageReaction.message.guild.channels.find(x => x.name === 'session-voting');

                  if (users.has('385777873581113344') || users.has('292598566759956480') || users.has('724991641932267612')) {
                   
                    votingChannel.fetchMessage("770020723376259073")
                    .then(message => {
                        message.edit(`${yes} - Sunday`);

                    });

                   }
               });
            }

            }

            if (messageReaction.emoji.id === no.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.find(x => x.name === 'modlog');

                    messageReaction.message.channel.overwritePermissions(permRole.id, {
                        VIEW_CHANNEL: false,
                        READ_MESSAGE_HISTORY: false
                      });

                      let modlogEmbed = new Discord.RichEmbed()
                        .setColor("RED")
                        .setTitle(`**Session Voting System Disabled!**`)
                        .setTimestamp()
                        .setDescription(`<@${user.id}> has disabled the Session Voting System.`);

                        modlogChannel.send(modlogEmbed);

                }

            }

            if (messageReaction.emoji.id === yes.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.find(x => x.name === 'modlog');

                    messageReaction.message.channel.overwritePermissions(permRole.id, {
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                      });

                      let modlogEmbed2 = new Discord.RichEmbed()
                      .setColor("GREEN")
                      .setTitle(`**Session Voting System Enabled!**`)
                      .setTimestamp()
                      .setDescription(`<@${user.id}> has enabled the Session Voting System.`);

                      modlogChannel.send(modlogEmbed2);

                }

            }

            if (messageReaction.emoji.id === gno.id) {

                if (user.id === '385777873581113344' || user.id === '292598566759956480' || user.id === '724991641932267612') {
            
                    let permRole = messageReaction.message.guild.roles.find(x => x.name === 'Member');
                    let modlogChannel = messageReaction.message.guild.channels.find(x => x.name === 'modlog');

                    let fetchchannel = bot.channels.find(x => x.name === 'session-voting');
                
                    fetchchannel.fetchMessage("770020659929153566")
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

                    fetchchannel.fetchMessage("770020695647846509")
                    .then(message => {
                        message.edit(`${no} - Monday`);
                    });

                    fetchchannel.fetchMessage("770020696125603881")
                    .then(message => {
                        message.edit(`${no} - Tuesday`);
                    });
                    
                    fetchchannel.fetchMessage("770020697232900116")
                    .then(message => {
                        message.edit(`${no} - Wednesday`);
                    });

                    fetchchannel.fetchMessage("770020697949863976")
                    .then(message => {
                        message.edit(`${no} - Thursday`);
                    });

                    fetchchannel.fetchMessage("770020721766039591")
                    .then(message => {
                        message.edit(`${no} - Friday`);
                    });
                    
                    fetchchannel.fetchMessage("770020722445516880")
                    .then(message => {
                        message.edit(`${no} - Saturday`);
                    });

                    fetchchannel.fetchMessage("770020723376259073")
                    .then(message => {
                        message.edit(`${no} - Sunday`);
                    });

                      let modlogEmbed3 = new Discord.RichEmbed()
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
    
            const drp1 = bot.emojis.get("759125897953017857");
            const drp2 = bot.emojis.get("759125936586883072");
            const drp3 = bot.emojis.get("759125984967393330");
            const drp4 = bot.emojis.get("759126011265941506");
            const drp5 = bot.emojis.get("759126035215810592");
            const drp6 = bot.emojis.get("759126060355813376");
            const drp7 = bot.emojis.get("759126083781394444");
    
            let logChannel = messageReaction.message.guild.channels.find(x => x.name === 'vote-removal-log');
            const warningsign = bot.emojis.get("729725849343098900");
        
        if (messageReaction.emoji.id === drp1.id) {

                    let voteEmbed1 = new Discord.RichEmbed()
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

            let voteEmbed2 = new Discord.RichEmbed()
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

            let voteEmbed3 = new Discord.RichEmbed()
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

            let voteEmbed4 = new Discord.RichEmbed()
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

            let voteEmbed5 = new Discord.RichEmbed()
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

            let voteEmbed6 = new Discord.RichEmbed()
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

            let voteEmbed7 = new Discord.RichEmbed()
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

    let fetchchannel = bot.channels.find(x => x.name === 'self-roles');
    fetchchannel.fetchMessages({
        limit: 80,
       });
    
    let onemessage = fetchchannel.fetchMessages("741366961757356104");
    
    });
    
    bot.on('messageReactionAdd', async (messageReaction, user) => {
    
    try {
    
    if (messageReaction.message.id === "759132165354160178") {
    
        gMember = messageReaction.message.guild.members.get(user.id);
    
        const drpmember = bot.emojis.get("756150199348363355");
        const drprecruit = bot.emojis.get("756148907347542046");
        const drpapplicant = bot.emojis.get("756149480750841866");
        const ps4 = bot.emojis.get("756151452870639787");
        const xbox = bot.emojis.get("756151503865118791");
        const ninswitch = bot.emojis.get("756151539948716112");
        const pc = bot.emojis.get("756151593409183836");
    
        let roledrpmember = messageReaction.message.guild.roles.find(x => x.name === 'DRP Member');
        let roledrprecruit = messageReaction.message.guild.roles.find(x => x.name === 'DRP Recruit');
        let roledrpapplicant = messageReaction.message.guild.roles.find(x => x.name === 'DRP Applicant');
        let roleps4 = messageReaction.message.guild.roles.find(x => x.name === 'Playstation');
        let rolexbox = messageReaction.message.guild.roles.find(x => x.name === 'Xbox');
        let rolepc = messageReaction.message.guild.roles.find(x => x.name === 'PC');
        let roleninswitch = messageReaction.message.guild.roles.find(x => x.name === 'Nintendo Switch');
    

        if (messageReaction.emoji.id === drpmember.id) {

            const yes = bot.emojis.get("700713527576625205");
            const no = bot.emojis.get("700713478578634783"); 

            let dmerrEmbed = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be a member of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let mainguild = bot.guilds.get('644227663829139466');
          
          if (mainguild.members.has(user.id)) {
            gMember.addRole(roledrpmember.id)

          } else {
            user.send(dmerrEmbed)
          }
        }
    
        if (messageReaction.emoji.id === drprecruit.id) {

            const yes = bot.emojis.get("700713527576625205");
            const no = bot.emojis.get("700713478578634783"); 

            let dmerrEmbed2 = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be a recruit of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let trainguild = bot.guilds.get('645035452956540929');
          
            if (trainguild.members.has(user.id)) {
                gMember.addRole(roledrprecruit.id);

            } else {
                user.send(dmerrEmbed2)
            }
        }
    
        if (messageReaction.emoji.id === drpapplicant.id) {

            const yes = bot.emojis.get("700713527576625205");
            const no = bot.emojis.get("700713478578634783"); 

            let dmerrEmbed3 = new Discord.RichEmbed()
            .setColor("RED")
            .setTitle(`${no} **Verification Failed!**`)
            .setDescription("You do not appear to be an applicant of Deputy Roleplay. Please reach out to any available Administrator if you believe this is a mistake.");
      
            let interviewguild = bot.guilds.get('604420918634086411');
          
          if (interviewguild.members.has(user.id)) {
            gMember.addRole(roledrpapplicant.id);

          } else {
            user.send(dmerrEmbed3)
          }
        }
    
        if (messageReaction.emoji.id === ps4.id) {
            gMember.addRole(roleps4.id);
        }
    
        if (messageReaction.emoji.id === xbox.id) {
            gMember.addRole(rolexbox.id);
        }
    
        if (messageReaction.emoji.id === pc.id) {
            gMember.addRole(rolepc.id);
        }
    
        if (messageReaction.emoji.id === ninswitch.id) {
            gMember.addRole(roleninswitch.id);
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
        
            const drpmember = bot.emojis.get("756150199348363355");
            const drprecruit = bot.emojis.get("756148907347542046");
            const drpapplicant = bot.emojis.get("756149480750841866");
            const ps4 = bot.emojis.get("756151452870639787");
            const xbox = bot.emojis.get("756151503865118791");
            const ninswitch = bot.emojis.get("756151539948716112");
            const pc = bot.emojis.get("756151593409183836");
        
            let roledrpmember = messageReaction.message.guild.roles.find(x => x.name === 'DRP Member');
            let roledrprecruit = messageReaction.message.guild.roles.find(x => x.name === 'DRP Recruit');
            let roledrpapplicant = messageReaction.message.guild.roles.find(x => x.name === 'DRP Applicant');
            let roleps4 = messageReaction.message.guild.roles.find(x => x.name === 'Playstation');
            let rolexbox = messageReaction.message.guild.roles.find(x => x.name === 'Xbox');
            let rolepc = messageReaction.message.guild.roles.find(x => x.name === 'PC');
            let roleninswitch = messageReaction.message.guild.roles.find(x => x.name === 'Nintendo Switch');
            
            if (messageReaction.emoji.id === drpmember.id) {
                gMember.removeRole(roledrpmember.id);
            }
        
            if (messageReaction.emoji.id === drprecruit.id) {
                gMember.removeRole(roledrprecruit.id);
            }
        
            if (messageReaction.emoji.id === drpapplicant.id) {
                gMember.removeRole(roledrpapplicant.id);
            }
        
            if (messageReaction.emoji.id === ps4.id) {
                gMember.removeRole(roleps4.id);
            }
        
            if (messageReaction.emoji.id === xbox.id) {
                gMember.removeRole(rolexbox.id);
            }
        
            if (messageReaction.emoji.id === pc.id) {
                gMember.removeRole(rolepc.id);
            }
        
            if (messageReaction.emoji.id === ninswitch.id) {
                gMember.removeRole(roleninswitch.id);
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
//   let memberrole = newMember.guild.roles.find(x => x.name === 'Deputy Director');

//   if(oldUserChannel === undefined && newUserChannel !== undefined) {

// newMember.addRole(memberrole.id);

//   } else if(newUserChannel === undefined){

// return;

//   }
// })

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel

// if(newUserChannel === undefined){

// let memberrole = oldMember.guild.roles.find(x => x.name === 'Owner');
	 
// oldMember.addRole(memberrole.id);
	
// }
//   });

//-—
//On Patrol Logging event start
//-—

bot.on('voiceStateUpdate', (oldMember, newMember) => {

try {

    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    const mainguild = bot.guilds.get('644227663829139466')
    //if(!newMember.guild.id === mainguild) return;

    let patrolrole = mainguild.roles.find(x => x.name === 'On Patrol');

    //const Briefingroom = newMember.guild.channels.fetch('689230310176456753')
    let Briefingroom = mainguild.channels.find(x => x.name === 'Briefing Room');
    let Queue = mainguild.channels.find(x => x.name === 'Queue');
    let ten1 = mainguild.channels.find(x => x.name === '10-1 Channel');
    let RA1 = mainguild.channels.find(x => x.name === 'Ride Along #1');
    let RA2 = mainguild.channels.find(x => x.name === 'Ride Along #2');
    let RA3 = mainguild.channels.find(x => x.name === 'Ride Along #3');
    let srutac = mainguild.channels.find(x => x.name === 'SRU Tactical Channel');
    let fireops = mainguild.channels.find(x => x.name === 'Fire Operations');
    let RTO = mainguild.channels.find(x => x.name === 'R.T.O.');
    let nine11 = mainguild.channels.find(x => x.name === '911 Centre');
    let Traffic1 = mainguild.channels.find(x => x.name === 'Traffic Stop #1');
    let Traffic2 = mainguild.channels.find(x => x.name === 'Traffic Stop #2');
    let Traffic3 = mainguild.channels.find(x => x.name === 'Traffic Stop #3');
    let Traffic4 = mainguild.channels.find(x => x.name === 'Traffic Stop #4');
    let Traffic5 = mainguild.channels.find(x => x.name === 'Traffic Stop #5');
    let Scene1 = mainguild.channels.find(x => x.name === 'On Scene #1');
    let Scene2 = mainguild.channels.find(x => x.name === 'On Scene #2');
    let Scene3 = mainguild.channels.find(x => x.name === 'On Scene #3');
    let Scene4 = mainguild.channels.find(x => x.name === 'On Scene #4');
    let Scene5 = mainguild.channels.find(x => x.name === 'On Scene #5');
    let Civ1 = mainguild.channels.find(x => x.name === 'Civ Channel #1');
    let Civ2 = mainguild.channels.find(x => x.name === 'Civ Channel #2');
    let Civ3 = mainguild.channels.find(x => x.name === 'Civ Channel #3');
    let Civ4 = mainguild.channels.find(x => x.name === 'Civ Channel #4');
    let Civ5 = mainguild.channels.find(x => x.name === 'Civ Channel #5');
    let Civ6 = mainguild.channels.find(x => x.name === 'Civ Channel #6');
    let Civ7 = mainguild.channels.find(x => x.name === 'Civ Channel #7');
    let Civ8 = mainguild.channels.find(x => x.name === 'Civ Channel #8');

    if(oldUserChannel === undefined && newUserChannel !== undefined) {

    if(newUserChannel.id === Briefingroom.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Queue.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === ten1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === RA1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === RA2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === RA3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === srutac.id) newMember.addRole(patrolrole.id);
    if(newUserChannel.id === fireops.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === RTO.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === nine11.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Traffic1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Traffic2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Traffic3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Traffic4.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Traffic5.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene4.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene5.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ4.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ5.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ6.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ7.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ8.id) newMember.addRole(patrolrole.id); 
    
    } else if(newUserChannel === undefined){
   
    if(oldUserChannel.id === Briefingroom.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Queue.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === ten1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === RA1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === RA2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === RA3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === srutac.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === fireops.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === RTO.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === nine11.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Traffic1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Traffic2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Traffic3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Traffic4.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Traffic5.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene4.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene5.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ4.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ5.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ6.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ7.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ8.id) newMember.removeRole(patrolrole.id); 

    } else if (oldUserChannel !== null && newUserChannel !== null) {

        if(newUserChannel.id === Briefingroom.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Queue.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === ten1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === RA1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === RA2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === RA3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === srutac.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === fireops.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === RTO.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === nine11.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic4.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic5.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene4.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene5.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ4.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ5.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ6.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ7.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ8.id) newMember.addRole(patrolrole.id);

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

    newMember.removeRole(patrolrole.id);

    }

} catch (err) {
  catchErr(err);
}

  });

//-—
//On Patrol Logging event end
//-—

bot.on('message', message => {

    if (message.channel.type == "dm") {

      if (message.author.bot) return;

      message.author.send("I cannot reply to DM's. If you require support, please reach out to a staff member in any of the Deputy Roleplay servers.");

      let staffguild2 = bot.guilds.get('644254160019128320');

      let dmmodlogembed = new Discord.RichEmbed()
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
 
