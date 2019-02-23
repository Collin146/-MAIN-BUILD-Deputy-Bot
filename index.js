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

//----
//Deleted Messages Log Start
//----

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

//----
//Deleted Messages Log Start
//----

//----
//Channel Created Log Start
//----

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

//----
//Channel Created Log End
//----

var authors = [];
var warned = [];
var banned = [];
var messageLog = [];

module.exports = async (client, options) => {
  /* Option Definitions */
  
  const warnBuffer = (options && options.warnBuffer) || 3; // Default Value: 3
  const maxBuffer = (options && options.maxBuffer) || 5; // Default Value: 5
  const interval = (options && options.interval) || 10000; //Default Time: 2000MS (2 Seconds in Miliseconds)
  const warningMessage = (options && options.warningMessage) || "please stop spamming!"; // Default Message: "please stop spamming!" (@User please stop spamming!)
  const banMessage = (options && options.banMessage) || "has been hit by ban hammer for spamming!"; // Default Message: "has been hit by ban hammer for spamming!" (@User has been hit by ban hammer for spamming!)
  const maxDuplicatesWarning = (options && options.maxDuplicatesWarning || 7); // Default Value: 7
  const maxDuplicatesBan = (options && options. maxDuplicatesBan || 10); // Deafult Value: 7
  const deleteMessagesAfterBanForPastDays = (options && options.deleteMessagesAfterBanForPastDays || 7); // Default Value: 10
  const exemptRoles = (options && options.exemptRoles) || []; // Default Value: Nothingness (None)
  const exemptUsers = (options && options.exemptUsers) || []; // Default Value: Nothingness (None)
  
  /* Make sure all variables have correct types */
  // TO DO: Terminate process when one of these errors is runned.

  if(isNaN(warnBuffer)) throw new Error("warnBuffer must be a number.");
  if(isNaN(maxBuffer)) throw new Error("maxBuffer must be a number.");
  if(isNaN(interval)) throw new Error("interval must be a number.");
  if(!isNaN(banMessage) || banMessage.length < 5) throw new Error("banMessage must be a string and have at least 5 charcters length.");
  if(!isNaN(warningMessage) || warningMessage.length < 5) throw new Error("warningMessage must be a string and have at least 5 characters.");
  if(isNaN(maxDuplicatesWarning)) throw new Error("maxDuplicatesWarning must be a number.")
  if(isNaN(maxDuplicatesBan)) throw new Error("maxDuplicatesBan must be a number.");
  if(isNaN(deleteMessagesAfterBanForPastDays)) throw new Error("deleteMessagesAfterBanForPastDays must be a number.");
  if(exemptRoles.constructor !== Array) throw new Error("extemptRoles must be an array.");
  if(exemptUsers.constructor !== Array) throw new Error("exemptUsers must be an array.");
  
  // Custom 'checkMessage' event that handles messages
 client.on("checkMessage", async (message) => {
 
  // Ban the User
  const banUser = async (m, banMsg) => {
    for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].author == m.author.id) {
          messageLog.splice(i);
        }
      }
  
      banned.push(m.author.id);
  
      let user = m.guild.members.get(m.author.id);
      if (user) {
        user.ban(deleteMessagesAfterBanForPastDays).then((member) => {
          m.channel.send(`<@!${m.author.id}>, ${banMsg}`);
          return true;
       }).catch(() => {
          m.channel.send(`Oops, seems like i don't have sufficient permissions to ban <@!${message.author.id}>!`);
          return false;
      });
    }
  }
  
    
   // Warn the User
   const warnUser = async (m, reply) => {
    warned.push(m.author.id);
    m.channel.send(`<@${m.author.id}>, ${reply}`); // Regular Mention Expression for Mentions
   }

    if (message.author.bot) return;
    if (message.channel.type !== "text" || !message.member || !message.guild || !message.channel.guild) return;
   
    if (message.member.roles.some(r => exemptRoles.includes(r.name)) || exemptUsers.includes(message.author.tag)) return;

    if (message.author.id !== client.user.id) {
      let currentTime = Math.floor(Date.now());
      authors.push({
        "time": currentTime,
        "author": message.author.id
      });
      
      messageLog.push({
        "message": message.content,
        "author": message.author.id
      });
      
      let msgMatch = 0;
      for (var i = 0; i < messageLog.length; i++) {
        if (messageLog[i].message == message.content && (messageLog[i].author == message.author.id) && (message.author.id !== client.user.id)) {
          msgMatch++;
        }
      }
      
      if (msgMatch == maxDuplicatesWarning && !warned.includes(message.author.id)) {
        warnUser(message, warningMessage);
      }

      if (msgMatch == maxDuplicatesBan && !banned.includes(message.author.id)) {
        banUser(message, banMessage);
      }

      var matched = 0;

      for (var i = 0; i < authors.length; i++) {
        if (authors[i].time > currentTime - interval) {
          matched++;
          if (matched == warnBuffer && !warned.includes(message.author.id)) {
            warnUser(message, warningMessage);
          } else if (matched == maxBuffer) {
            if (!banned.includes(message.author.id)) {
              banUser(message, banMessage);
            }
          }
        } else if (authors[i].time < currentTime - interval) {
          authors.splice(i);
          warned.splice(warned.indexOf(authors[i]));
          banned.splice(warned.indexOf(authors[i]));
        }

        if (messageLog.length >= 200) {
          messageLog.shift();
        }
      }
    }
  });
}

bot.login(botconfig.token);
