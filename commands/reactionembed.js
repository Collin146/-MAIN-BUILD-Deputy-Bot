const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    const drpmember = bot.emojis.get("756150199348363355");
    const drprecruit = bot.emojis.get("756148907347542046");
    const drpapplicant = bot.emojis.get("756149480750841866");
    const ps4 = bot.emojis.get("756151452870639787");
    const xbox = bot.emojis.get("756151503865118791");
    const ninswitch = bot.emojis.get("756151539948716112");
    const pc = bot.emojis.get("756151593409183836");


    let drpstaff= message.guild.roles.find(x => x.name === 'DRP Staff');
    let drpadmin = message.guild.roles.find(x => x.name === 'DRP Administrator');
    let drpmemberrole = message.guild.roles.find(x => x.name === 'DRP Member');

    let reactEmbed = new Discord.RichEmbed()
    .setTitle("**Self-Role Assigning Menu**")
    .setColor("#00f4ef")
    .setDescription([
        `Use the reactions provided below to assign yourself any of the roles listed below. To remove a role, simply remove your reaction of that specific role emoji. If this doesn't work, readd your reaction of that role and then remove it again.`,
        ` `,
        `**Deputy Roleplay Membership Roles**`,
        ` `,
        `${drpapplicant} - Deputy Roleplay Applicant`,
        `${drprecruit} - Deputy Roleplay Recruit`,
        `${drpmember} - Deputy Roleplay Member`,
        ` `,
        `**Gaming Platform Roles**`,
        ` `,
        `${ps4} - Playstation`,
        `${xbox} - Xbox`,
        `${pc} - PC`,
        `${ninswitch} - Nintendo Switch`,
        ` `,
        `When attempting to obtain any of the Deputy Roleplay membership roles, our bot will verify your position and will not give you the role unless you are in the correct discord server, e.x DRP Members will need to be in the DRP Main Server to obtain the ${drpmemberrole} role, etc. To obtain any of the following roles: ${drpstaff} or ${drpadmin}, reach out to any available Administrator.`
      ].join('\n'))

message.channel.send("https://cdn.discordapp.com/attachments/700641446872612864/756153217452343376/BANNER_DRP.png");

      const sentMessage =  await message.channel.send(reactEmbed);
      await sentMessage.react(drpapplicant.id);
      await sentMessage.react(drprecruit.id);
      await sentMessage.react(drpmember.id);
      await sentMessage.react(ps4.id);
      await sentMessage.react(xbox.id);
      await sentMessage.react(pc.id);
      await sentMessage.react(ninswitch.id);

}

module.exports.help = {
   name: "reactionembed"

}
