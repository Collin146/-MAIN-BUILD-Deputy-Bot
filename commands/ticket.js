const discord = require('discord.js'); //haal discord.js binnen

module.exports.run = async (client, message, args, guild) => { 

  function catchErr (err, message) {

    let errchannel = client.channels.find(x => x.name === 'errors');
    const warningsign = client.emojis.get("729725849343098900");
    
    errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`ticket.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
    
    }

    try {

  let onderwerp = args.join(" ");
  var userName = message.author.username;
  let bicon = client.user.displayAvatarURL;
const yes = client.emojis.get("700713527576625205");
const no = client.emojis.get("700713478578634783"); 
    
//Embed voor geen reden
 let errorEmbed = new discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription("You didn't provide a reason for this ticket!");

  if(!onderwerp) return message.channel.send(errorEmbed); //als er geen args zijn

  let role = message.guild.roles.find(x => x.name === 'Staff Team');
  let role2 = message.guild.roles.find(x => x.name ==='@Staff Team'); //De role van iedereen


  let errEmbed2 = new discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error!**`)
  .setDescription("Please create a role called **Staff Team** to use tickets!");

      if (!role) return message.channel.send(errEmbed2); //Als support rank er niet is
      const ticketEmbed = new discord.RichEmbed()
      .setTitle("**New ticket!**")
      .addField("Ticket creator", `**${message.author}**`, true)
      .addField("Reason", `**${onderwerp}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      
let ticketchannel = message.guild.channels.find(x => x.name === 'needing-support');
ticketchannel.send({embed: ticketEmbed});

      geluktEmbed = new discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${yes} **Done!**`)
      .setDescription(`You succesfully created a ticket. This has been sent to the Staff Team!`)

      message.channel.send(geluktEmbed);
      return;

    } catch(err) {
      catchErr(err)
      
    }

}
module.exports.help = { //De export naar een echte CMD
    name: 'ticket' //Om de command aan te duiden dus bijvoorbeeld !help - !ticket etc.
  };
