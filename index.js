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
    console.log(`${member.id} left the server.`);

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
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    
    if(cmd === `${prefix}hello`){
        return message.channel.send("hello whats up?");
    }


});

bot.on('error', err => {
    console.log(err);
});

bot.login(botconfig.token);
