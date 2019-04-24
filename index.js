const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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
    let welcomechannel = member.guild.channels.find(`name`, "welcome");

const rando_imgs = [
'https://media.discordapp.net/attachments/540626663944355861/555452902936936459/Screenshot_2019-01-03_at_13.15.28.png',
'https://media.discordapp.net/attachments/540626663944355861/555452202852941843/Grand_Theft_Auto_V_20190222234636.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555452108430901248/Grand_Theft_Auto_V_20190223000228.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555451714711453747/Grand_Theft_Auto_V_20181223003801.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555451678724194305/Grand_Theft_Auto_V_20181220213209.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555452668567486475/Grand_Theft_Auto_V_20181225223203.jpg',
]

const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];
let memberTag = member.user.tag;
    
    let embed = new Discord.RichEmbed()
      .setTitle("**A new user has joined!**")
      .setColor("#00f4ef")
      .setDescription(`Welcome **${memberTag}**, To Global Roleplay™ PS4, the best Roleplay Community for PS4!`)
      .setImage(`${image}`);
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

    let welcomechannel = member.guild.channels.find(`name`, "left-members");
    welcomechannel.send(`**${memberTag}** has left the server.`);
    

});

//--
//left message end
//--

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setActivity("v14.2 | Status: Online | !help");

});

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
            let commrole = message.guild.roles.find('name', 'Community Manager'); 
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.roles.find("name", "Content Creator")) return;
            if (message.member.roles.has(commrole.id)) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle("**Notice!**")
            .setColor("RED")
            .setDescription("Links are not allowed to be sent!")
            .setFooter("Spamming links will result in a punishment!");
           
            await message.channel.send(linkembed);
        }
    } catch (e) {
        console.log(e);
    }
});

//--      
//Link Detection End  
//--

//--
//mention detection begin
//--
bot.on(`message`, async message => {
    const bannedWords = [`@everyone` || `@Member`]
    let weazelrole = message.guild.roles.find('name', 'Weazel News'); 
    let commrole = message.guild.roles.find('name', 'Community Manager'); 
    let staffrole = message.guild.roles.find('name', 'Staff Team'); 
    try {
            if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.roles.has(weazelrole.id)) return;
            if (message.member.roles.has(commrole.id)) return;
            if (message.member.roles.has(staffrole.id)) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle("**Notice!**")
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
    const bannedWords = [`nigger`, `nigg`, `nogger`, `nagger`, `kanker`, `negro`, `negger`, `nigro`, `nignog`, `nig ger`, `nig  ger`, `ni99er`, `nog ger`, `n1gger`, `neger`, `nigga`, `nigge`, `n1gg3r`, `nigg3r`] 
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            
            let linkembed = new Discord.RichEmbed()
            .setTitle("**Notice!**")
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

let modlogchannel = channel.guild.channels.find(`name`, "modlog");
modlogchannel.send(ccembed);

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

let modlogchannel = channel.guild.channels.find(`name`, "modlog");
modlogchannel.send(cdembed);

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

      let modlogchannel = guild.channels.find(`name`, "modlog");
      modlogchannel.send(ubembed);

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
  
    let embed = new Discord.RichEmbed()
      .setTitle("**Deleted Message**")
      .setColor("#fc3c3c")
      .addField("Author", message.author.tag, true)
      .addField("Channel", message.channel, true)
      .addField("Message", message.content)
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
  
    let channel = message.guild.channels.find(x => x.name === 'deleted-messages-log');
    channel.send({embed: embed});
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

let modlogchannel = oldChannel.guild.channels.find(`name`, "modlog");
modlogchannel.send(cuembed);

    }

});

//-—
//Modlog events end
//-—

//--
//Spam detection begin
//--

bot.on('message', message => {
    // this function can check whether the content of the message you pass is the same as this message
    let filter = message => {
      return message.content.toLowerCase() == message.content.toLowerCase() && // check if the content is the same (sort of)
             message.author == message.author; // check if the author is the same
    }
  
    message.channel.awaitMessages(filter, {
      maxMatches: 1, // you only need that to happen once
      time: 5 * 1000 // time is in milliseconds
    }).then(collected => {
        const tomute = message.author
        let muterole = message.guild.roles.find(`name`, "Muted");
        let memberrole = message.guild.roles.find(`name`, "Member");
        let modlogchannel = message.guild.channels.find(`name`, "modlog");
        if(!memberrole) return modlogchannel.send("**Spam Detection Error!** The role `Member` does not exist")
      // this function will be called when a message matches you filter
      await(tomute.addRole(muterole.id));
      await(tomute.removeRole(memberrole.id));
      
      setTimeout(function(){
          tomute.removeRole(muterole.id);
          tomute.addRole(memberrole.id);
          modlogchannel.send(`<@${tomute.id}> has been unmuted!`);
      }, ms("2h"));

      let ModEmbed = new Discord.RichEmbed()
      .setTitle("**Spam Detected!**")
      .setTimestamp()
      .setColor("BLACK")
      .setDescription([
          `<@${tomute.id}> **was spamming in** ${message.channel}`,
          ` `,
          `**Action Used:** Muted For 2h`,
        ].join('\n'))
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      
      let warnchannel = message.guild.channels.find(`name`, "modlog");
      if(!warnchannel) return message.reply("Couldn't find channel");
      
      warnchannel.send(ModEmbed);

    }).catch(console.error);
  });
  
bot.login(botconfig.token);
