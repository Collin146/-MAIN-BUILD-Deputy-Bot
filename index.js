const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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

bot.on('guildMemberAdd', member => {
    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    // channel: the channel you want to send the welcome message in
    // or send it with an embed:

const rando_imgs = [
'https://media.discordapp.net/attachments/540626663944355861/555452902936936459/Screenshot_2019-01-03_at_13.15.28.png',
'https://media.discordapp.net/attachments/540626663944355861/555452202852941843/Grand_Theft_Auto_V_20190222234636.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555452108430901248/Grand_Theft_Auto_V_20190223000228.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555451714711453747/Grand_Theft_Auto_V_20181223003801.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555451678724194305/Grand_Theft_Auto_V_20181220213209.jpg',
'https://media.discordapp.net/attachments/540626663944355861/555452668567486475/Grand_Theft_Auto_V_20181225223203.jpg',
]

const image = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];

    let embed = new Discord.RichEmbed()
      .setTitle("**A new user has joined!**")
      .setColor("#00f4ef")
      .setDescription(`Welcome ${member}, To Global Roleplay™ PS4, the best Roleplay Community for PS4!`)
      .setImage(`${image}`);
    welcomechannel.send({embed});

    let backupembed = new Discord.RichEmbed()
     .setColor("#00f4ef")
     .setAuthor(`${member.username}`, member.avatarURL)
     .setDescription("Has just joined.");

    let backupchannel = member.guild.channels.find(`name`, "backup-users-joined");
    backupchannel.send(backupembed);
  });

bot.on("guildMemberRemove", async member => {
    console.log(`${member} left the server.`);

    let welcomechannel = member.guild.channels.find(`name`, "left-members");
    welcomechannel.send(`${member} has left the server.`);
});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setActivity("v1010.7.3 | !help | prefix !");

});

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

//-—
//Deleted Messages Log Start
//-—

bot.on("messageDelete", async msg => {
    let logs = await msg.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first();
  
    let embed = new Discord.RichEmbed()
      .setTitle("**Deleted Message**")
      .setColor("#fc3c3c")
      .addField("Author", msg.author.tag, true)
      .addField("Channel", msg.channel, true)
      .addField("Message", msg.content)
      .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);
  
    let channel = msg.guild.channels.find(x => x.name === 'deleted-messages-log');
    channel.send({embed});
  });

//-—
//Deleted Messages Log Start
//-—

//—
//Link Detection Start
//--


bot.on(`message`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`, 'https://', 'http://', '.com/', '.com', 'www.', 'https://www.', 'http://www.']
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.roles.find("name", "Content Creator")) return;
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
//     let errchan = message.guild.channels.find(`name`, `bot-errors`);
//     let modchan = message.guild.channels.find(`name`, `modlog`);
//     if (!weazelrole) return errchan.send("Weazel Role doesn't exist! (index.js, 161)");
//     if (!errchan) return modchan.send("Error channel doesn't exist (bot-errors)");
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            if (message.member.hasPermission("ADMINISTRATOR")) return;
            if (message.member.roles.has(weazelrole.id)) return;
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

//—
//Channel Created Log Start
//—

//bot.on('channelCreate', async msg => {
 //   let logs = await msg.guild.fetchAuditLogs({type: 10});
//    let entry = logs.entries.first();
//  
//    let ccembed = new Discord.RichEmbed()
//      .setTitle("**Channel Created!**")
 //     .setColor("#GREEN")
 //     .addField("Channel Name", msg.channel.content, true)
//      .setTimestamp()
 // 
//    let cchannel = msg.guild.channels.find(x => x.name === 'modlog');
 //   cchannel.send({ccembed});
 // });




//-—
//Channel Created Log Start
//-—

// bot.on("channelCreate", async  => {
//     let logs = await msg.guild.fetchAuditLogs({type: 10});
//     let entry = logs.entries.first();
  
//     let CCembed = new Discord.RichEmbed()
//       .setTitle("**CHANNEL CREATED**")
//       .setColor("#55ea10")
//       .addField("Channel ID", msg.channel.id, true)
//       .addField("Channel Type", msg.channel.type, true)
  
//     let channel = msg.guild.channels.find(x => x.name === 'modlog');
//     channel.send({CCembed});
//   });

//-—
//Channel Created Log End
//-—


bot.login(botconfig.token);
