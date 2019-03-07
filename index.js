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

bot.on('guildMemberAdd', member => {
    let welcomechannel = member.guild.channels.find(`name`, "welcome");
    // channel: the channel you want to send the welcome message in
    // or send it with an embed:
    let embed = new Discord.RichEmbed()
      .setTitle("A new user has joined!")
      .setColor("#00f4ef")
      .setDescription(`Welcome ${member}, To Global Roleplay™ PS4, the best Roleplay Community for PS4!`)
      .setImage('https://cdn.discordapp.com/attachments/461540254441144326/542114903767515150/Screenshot_2019-01-03_at_13.15.28.png');
    welcomechannel.send({embed});
  });

bot.on("guildMemberRemove", async member => {
    console.log(`${member} left the server.`);

    let welcomechannel = member.guild.channels.find(`name`, "left-members");
    welcomechannel.send(`${member} has left the server.`);
});

bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
 bot.user.setActivity("!help | prefix !");

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
      .setTitle("**DELETED MESSAGE**")
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
//Channel Created Log Start
//—

client.on('channelCreate', async channel => {
   let logs = await msg.guild.fetchAuditLogs({type: 10});
    let entry = logs.entries.first();
  
    let ccembed = new Discord.RichEmbed()
      .setTitle("**Channel Created!**")
      .setColor("#GREEN")
      .addField("Channel Name", channel.id, true)
      .addField("Created At", channel.createdAt)
      .setTimestamp()
  
    let ccchannel = msg.guild.channels.find(x => x.name === 'modlog');
    ccchannel.send({ccembed});
  });
    console.log("Channel with ID: " + channel.id + " was just created");



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
