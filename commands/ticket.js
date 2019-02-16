const discord = require('discord.js'); //haal discord.js binnen

module.exports.run = async (client, message, args, guild) => { //dingen definen

    //Onderwerp van de ticket
  let onderwerp = args.join(" ");

  //Username van de persoon
      var userName = message.author.username;

      //Icon  van de bot
  let bicon = client.user.displayAvatarURL;
  errorEmbed = new discord.RichEmbed() //Embed als er geen reden is binnenhalen

//Embed voor geen reden
  .setColor("RED")
  .setAuthor("Error", bicon)
  .setDescription("Please input a valid reason!")

  if(!onderwerp) return message.channel.send(errorEmbed); //als er geen args zijn

  let role = message.guild.roles.find(c => c.name ==='Staff Team'); //De role die toegang heeft tot de channel
  let role2 = message.guild.roles.find(c => c.name ==='@Staff Team'); //De role van iedereen
        // Als ticket al gemaakt is
        var bool = false;

        // Kijk na als ticket al gemaakt is.
        message.guild.channels.forEach((channel) => {

          // Als ticket is gemaakt, zend bericht.
          if (channel.name == "!ticket-" + userName.toLowerCase()) {

            let dongembed = new discord.RichEmbed()
            .setColor("RED")
            .setAuthor("Error")
            .setDescription("<:xcross:504361310385995798> You already have a open ticket!")
            message.channel.send(dongembed);

              bool = true;

          }

      });

      // Als ticket return code.
      if (bool == true) return;

      if (!role) return message.channel.send("Please create a role called **Staff Team** to use tickets. ") //Als support rank er niet is
      const ticketEmbed = new discord.RichEmbed()
      .setAuthor("New ticket!")
      .addField("Ticket creator", `**${message.author}**`, true)
      .addField("Reason", `**${onderwerp}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter("Ticket created on:");
      
      let ticketchannel = message.guild.channels.find(`name`, "meetings");
      if(!ticketchannel) return message.reply("Couldn't find channel");

      ticketchannel.send(ticketEmbed);

      geluktEmbed = new discord.RichEmbed()
      .setAuthor("Your ticket has been created!")
      .setColor("GREEN")
      .setAuthor("Done")
      .setDescription(`You succesfully created a ticket. This has been sent to the Staff Team!`)

      message.channel.send(geluktEmbed);
      channel.send("@Staff Team") .then(message => message.delete(100)); // De @everyone tag
      return;
}
module.exports.help = { //De export naar een echte CMD
    name: 'ticket' //Om de command aan te duiden dus bijvoorbeeld !help - !ticket etc.
  };
