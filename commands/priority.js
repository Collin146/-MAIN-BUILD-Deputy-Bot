const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const ms = require("ms");
const { time } = require("console");
const { userInfo } = require("os");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`priority.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

        if (message.channel.id === "737831284390363177") {

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 
    const warningsign = bot.emojis.get("729725849343098900");
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');
    let civrole = message.guild.roles.find(x => x.name === 'Civilian');

    let priorityEmbed = new Discord.RichEmbed()
    .setTitle(`${warningsign} **Priority Active!**`)
    .setTimestamp()
    .setColor("RED")
    .setDescription(`A priority has been started by ${message.author}. To all civilians, please refrain from creating any other priorities until this priority & the cooldown have ended! To end the priority, press the ${no} below. This cannot be undone!`);

    message.channel.bulkDelete(50);
    message.channel.send(`<@&${mentionrole.id}>`);
    const sentMessage =  await message.channel.send(priorityEmbed);
    await sentMessage.react(no.id);

    message.delete().catch(O_o=>{});

    message.channel.overwritePermissions(civrole.id, {
        SEND_MESSAGES: false
      });

const filter = (reaction, user) => {
    gmember = message.guild.members.get(user.id)

    let modlogchannel = message.guild.channels.find(x => x.name === 'modlog');

    const priocancel = new Discord.RichEmbed()
    .setColor('RED')
    .setTimestamp()
    .setTitle("**Priority Admin Cancel!**")
    .setDescription([
        `**Cancelled By:** <@${user.id}>`,
        `**Priority By:** ${message.author}`,
        `**Channel:** ${message.channel}`
      ].join('\n'))

    if (user.id !== message.author.id && user.id === '724991641932267612' || user.id !== message.author.id && user.id === '292598566759956480' || user.id !== message.author.id && user.id === '385777873581113344') modlogchannel.send({embed: priocancel});
    return [no.id].includes(reaction.emoji.id) && user.id === message.author.id || user.id === '724991641932267612' || user.id === '292598566759956480' || user.id === '385777873581113344'; 
};


sentMessage.awaitReactions(filter, { max: 1, time: 10800000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.id === no.id) {
    
        message.channel.bulkDelete(4);

        let priorityendEmbed = new Discord.RichEmbed()
        .setTitle(`${warningsign} **Priority Ended!**`)
        .setTimestamp()
        .setColor("ORANGE")
        .setDescription(`The previous priority that was created by ${message.author} has ended! Please wait for the 20 minute cooldown to end before creating another priority!`);

        message.channel.send(priorityendEmbed);

        var timeout = setTimeout(function(){

            message.channel.bulkDelete(5);

                let cooldownendEmbed = new Discord.RichEmbed()
                .setTitle(`${warningsign} **Cooldown Ended!**`)
                .setTimestamp()
                .setColor("GREEN")
                .setDescription(`The priority cooldown has ended! You are now authorized to create another priority. When doing so, please use the \`!priority\` command!`);
        
                message.channel.send(cooldownendEmbed);

                message.channel.overwritePermissions(civrole.id, {
                    SEND_MESSAGES: true
                  });
            }, ms("20m"));
            
        }
        else {
        }
    })
    .catch(collected => {
    });

    return;
        }

        const no = bot.emojis.get("700713478578634783"); 

        let errEmbed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(`${no} **Error!**`)
        .setDescription("You can only use this command within the <#737831284390363177> channel.");

        message.channel.send(errEmbed);

    } catch(err) {
         console.log(err)

    }    

}

module.exports.help = {
    name: "priority"
}
