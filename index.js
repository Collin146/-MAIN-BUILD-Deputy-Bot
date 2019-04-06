const botconfig = require("./Botconfig.json");
const Discord = require("discord.js");
const ytdl = require('ytdl-core');
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
      .setDescription(`Welcome <@${member.id}>, To Global Roleplay™ PS4, the best Roleplay Community for PS4!`)
      .setImage(`${image}`);
  welcomechannel.send({embed});

    let memberTag = member.user.tag;
    
    let backupembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(`${memberTag}`, member.avatarURL)
    .setDescription("Has just joined.");

    let backupchannel = member.guild.channels.find(`name`, "backup-users-joined");
    backupchannel.send(backupembed);
  });

bot.on("guildMemberRemove", async member => {
    console.log(`${member} left the server.`);

    let welcomechannel = member.guild.channels.find(`name`, "left-members");
    welcomechannel.send(`<@${member.id}> has left the server.`);
    
    let memberTag = member.user.tag;
    
    let backupembed = new Discord.RichEmbed()
    .setColor("RED")
    .setAuthor(`${memberTag}`, member.avatarURL)
    .setDescription("Has just left.");

    let backupchannel = member.guild.channels.find(`name`, "backup-users-joined");
    backupchannel.send(backupembed);

});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setActivity("v1131.6.2| Status: Online | !help");

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

//--
//music start
//--

let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${botconfig.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(ytdl(song.url, { audioonly: true }), { passes : botconfig.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(botconfig.prefix + 'pause')) {
					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(botconfig.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(botconfig.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(botconfig.prefix + 'time')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${botconfig.prefix}add`);
		ytdl.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${botconfig.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
        msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
        
    }
}

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
