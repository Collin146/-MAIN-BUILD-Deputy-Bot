const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
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

//const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
let memberTag = member.user.tag;

//let welcuser = member.guild.member(member) || member.guild.fetchMember(member)

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

let leftchannel = member.guild.channels.find(x => x.name === 'left-members');
    leftchannel.send(`**${memberTag}** has left the server.`);
    
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
consolechannel.send(`All files successfully loaded!`)
consolechannel.send(`${bot.user.username} is online!`)
bot.user.setActivity("!help | Status: Online");

});

//--
//prefix begin
//--

bot.on("message", async message => {
 
try {

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
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle(`${warningsign} **Notice!**`)
            .setColor("RED")
            .setDescription("Links are not allowed to be sent!")
            .setFooter("Continuing on sending links words will result in disciplinary action!");
           
            await message.channel.send(linkembed);
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
            .setFooter("Mention spam will result in disciplinary action!");
           
            await message.channel.send(linkembed);
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
            .setDescription("Those words are not allowed to be sent!")
            .setFooter("Continuing on sending those words will result in disciplinary action!");
           
            await message.channel.send(linkembed);
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

//  GIVE ROLES THROUGH JOINING VC

// bot.on('voiceStateUpdate', (oldMember, newMember) => {
//   let newUserChannel = newMember.voiceChannel
//   let oldUserChannel = oldMember.voiceChannel
//   let memberrole = newMember.guild.roles.find(x => x.name === 'Founder');

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
    let Scene1 = mainguild.channels.find(x => x.name === 'On Scene #1');
    let Scene2 = mainguild.channels.find(x => x.name === 'On Scene #2');
    let Scene3 = mainguild.channels.find(x => x.name === 'On Scene #3');
    let Scene4 = mainguild.channels.find(x => x.name === 'On Scene #4');
    let Civ1 = mainguild.channels.find(x => x.name === 'Civ Channel #1');
    let Civ2 = mainguild.channels.find(x => x.name === 'Civ Channel #2');
    let Civ3 = mainguild.channels.find(x => x.name === 'Civ Channel #3');
    let Civ4 = mainguild.channels.find(x => x.name === 'Civ Channel #4');
    let Civ5 = mainguild.channels.find(x => x.name === 'Civ Channel #5');
    let Civ6 = mainguild.channels.find(x => x.name === 'Civ Channel #6');
    let Civ7 = mainguild.channels.find(x => x.name === 'Civ Channel #7');

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
    if(newUserChannel.id === Scene1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Scene4.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ1.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ2.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ3.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ4.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ5.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ6.id) newMember.addRole(patrolrole.id); 
    if(newUserChannel.id === Civ7.id) newMember.addRole(patrolrole.id); 
    
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
    if(oldUserChannel.id === Scene1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Scene4.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ1.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ2.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ3.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ4.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ5.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ6.id) newMember.removeRole(patrolrole.id); 
    if(oldUserChannel.id === Civ7.id) newMember.removeRole(patrolrole.id); 

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
        if(newUserChannel.id === Traffic1.id) newMember.addRole(patrolrole.id);;
        if(newUserChannel.id === Traffic2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Traffic4.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Scene4.id) newMember.addRole(patrolrole.id);;
        if(newUserChannel.id === Civ1.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ2.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ3.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ4.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ5.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ6.id) newMember.addRole(patrolrole.id);
        if(newUserChannel.id === Civ7.id) newMember.addRole(patrolrole.id);

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
    if(newUserChannel.id === Scene1.id) return;
    if(newUserChannel.id === Scene2.id) return;
    if(newUserChannel.id === Scene3.id) return;
    if(newUserChannel.id === Scene4.id) return;
    if(newUserChannel.id === Civ1.id) return;
    if(newUserChannel.id === Civ2.id) return;
    if(newUserChannel.id === Civ3.id) return;
    if(newUserChannel.id === Civ4.id) return;
    if(newUserChannel.id === Civ5.id) return;
    if(newUserChannel.id === Civ6.id) return;
    if(newUserChannel.id === Civ7.id) return;

    newMember.removeRole(patrolrole.id);

    }

} catch (err) {
  catchErr(err);
}

  });

//-—
//On Patrol Logging event end
//-—

//-—
//Modlog events end
//-—

bot.login(botconfig.token);
 
