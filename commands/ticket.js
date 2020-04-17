const discord = require('discord.js'); //haal discord.js binnen

module.exports.run = async (client, message, args, guild) => { //dingen definen

  let onderwerp = args.join(" ");
  var userName = message.author.username;
  let bicon = client.user.displayAvatarURL;
const yes = client.emojis.get("700713527576625205");
const no = client.emojis.get("700713478578634783"); 
    
//Embed voor geen reden
 let errorEmbed = new discord.RichEmbed()
  .setColor("RED")
  .setTitle(`${no} **Error**`)
  .setDescription("Please input a valid reason!")

  if(!onderwerp) return message.channel.send(errorEmbed); //als er geen args zijn

  let role = message.guild.roles.find(x => x.name === 'Staff Team');
  let role2 = message.guild.roles.find(x => x.name ==='@Staff Team'); //De role van iedereen
        // Als ticket al gemaakt is
        var bool = false;

        // Kijk na als ticket al gemaakt is.
        message.guild.channels.forEach((channel) => {

          // Als ticket is gemaakt, zend bericht.
          if (channel.name == "!ticket-" + userName.toLowerCase()) {

            let dongembed = new discord.RichEmbed()
            .setColor("RED")
            .setTitle(`${no} **Error**`)
            .setDescription("<:xcross:504361310385995798> You already have a open ticket!")
            message.channel.send(dongembed);

              bool = true;

          }

      });

      // Als ticket return code.
      if (bool == true) return;

      if (!role) return message.channel.send("Please create a role called **Staff Team** to use tickets. ") //Als support rank er niet is
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
}
module.exports.help = { //De export naar een echte CMD
    name: 'ticket' //Om de command aan te duiden dus bijvoorbeeld !help - !ticket etc.
  };
