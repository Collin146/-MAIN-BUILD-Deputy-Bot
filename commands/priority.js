const Discord = require("discord.js");
const fs = require("fs");
const errors = require("../utils/errors.js");
const ms = require("ms");
const { time } = require("console");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("729725849343098900");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`priority.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

    try {

    const yes = bot.emojis.get("700713527576625205");
    const no = bot.emojis.get("700713478578634783"); 
    const warningsign = bot.emojis.get("729725849343098900");
    let mentionrole = message.guild.roles.find(x => x.name === 'On Patrol');

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

const filter = (reaction, user) => {
    return [no.id].includes(reaction.emoji.id) && user.id === message.author.id;
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
            }, ms("20m"));
            
        }
        else {
        }
    })
    .catch(collected => {
    });

    } catch(err) {
         catchErr(err)

    }    

}

module.exports.help = {
    name: "priority"
}
