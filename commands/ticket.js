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
            .setAuthor("Error", bicon)
            .setDescription("<:xcross:504361310385995798> You already have a open ticket!")
            message.channel.send(dongembed);

              bool = true;

          }

      });

      // Als ticket return code.
      if (bool == true) return;

      if (!role) return message.channel.send("Please create a role called **Staff Team** to use tickets. ") //Als support rank er niet is
  message.guild.createChannel("!ticket-" + userName, "text").then(c => {//Wat permissies voor de rolls
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      let bicon = client.user.displayAvatarURL; //De icoon van de bot
      const ticketEmbed = new discord.RichEmbed()
      .setAuthor("New ticket!", bicon)
      .addField("Ticket creator", `**${message.author}**`, true)
      .addField("Reason", `**${onderwerp}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .setColor("GREEN")
      .setDescription("Please wait for a staffmember to join your ticket. If you dont get any reaction within 3 hours. You can tag @support rank. We will reply to this ticket as soon as possible.", true)
      .setTimestamp()
      .setFooter("Ticket created on:", bicon);
      c.send({ embed: ticketEmbed });

      c.setTopic(`Ticket creator ${message.author}`) //De beschrijving van de channel

      const categoryId = "1111111111111111"; //Category ID plaats het binnen de "11111"
      c.setParent(categoryId) // Zet kanaal in category.

      geluktEmbed = new discord.RichEmbed()

      .setAuthor("Your ticket has been created!", bicon)
    .setColor("GREEN")
      .setAuthor("Done", bicon)
      .setDescription(`You succesfully created a ticket. See #ticket-${message.author.username}${message.author.discriminator}`)

      message.channel.send(geluktEmbed);
      c.send("@Staff Team") .then(message => message.delete(100)); // De @everyone tag
      return;
  }).catch(console.error);

}
module.exports.help = { //De export naar een echte CMD
    name: 'ticket' //Om de command aan te duiden dus bijvoorbeeld !help - !ticket etc.
  };
