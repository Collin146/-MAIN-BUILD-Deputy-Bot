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
  .setAuthor("Error")
  .setDescription("Please input your suggestion!")

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
            .setDescription("<:xcross:504361310385995798> Error #22, Report to Collin#6966 immidietly!")
            message.channel.send(dongembed);

              bool = true;

          }

      });

      // Als ticket return code.
      if (bool == true) return;

      if (!role) return message.channel.send("Please create a role called **Staff Team** to use suggestions. ") //Als support rank er niet is
      const ticketEmbed = new discord.RichEmbed()
      .setAuthor(message.author.avatarURL, message.author.username)
      .addField("Suggestion", `**${onderwerp}**`)
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      
      let ticketchannel = message.guild.channels.find(`name`, "server-suggestions-staff-only");
      if(!ticketchannel) return message.reply("Couldn't find channel");

      ticketchannel.send(ticketEmbed);
      message.react("❌");
      message.react("➖");
      message.react("✔");

      geluktEmbed = new discord.RichEmbed()
      .setAuthor("Your suggestion has been sent!")
      .setColor("GREEN")
      .setAuthor("Done")
      .setDescription(`You succesfully sent a suggestion. This has been sent to the Staff Team!`)

      message.channel.send(geluktEmbed);
      return;
}
module.exports.help = { //De export naar een echte CMD
    name: 'suggest' //Om de command aan te duiden dus bijvoorbeeld !help - !ticket etc.
  };
