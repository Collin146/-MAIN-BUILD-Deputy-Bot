const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

    function catchErr (err, message) {

        let errchannel = bot.channels.find(x => x.name === 'errors');
        const warningsign = bot.emojis.get("700843409526620180");
        
        errchannel.send(`**<@292598566759956480> ${warningsign} Error Detected in \`training.js\` ${warningsign}** \`\`\`` + err + `\`\`\``);
        
        }

        //try {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if(args[0] === "help"){
        message.reply("Usage: !training <day> <time>");
        return;
    }
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that.");
    if(args[0] == "help"){
        message.reply("Usage: !training <day> <time>");
        return;
    }

const yes = bot.emojis.get("700713527576625205");
const no = bot.emojis.get("700713478578634783");
let civilianrole = message.guild.roles.find(x => x.name === 'Civilian');
let bcsorole = message.guild.roles.find(x => x.name === 'BCSO');
let lsfdrole = message.guild.roles.find(x => x.name === 'LSFD');
let commsrole = message.guild.roles.find(x => x.name === 'Communications');
let day = args[1];
let time = args[2];

let errEmbed = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a day & time!`);

if (!day) return message.channel.send(errEmbed);

let errEmbed2 = new Discord.RichEmbed()
.setColor("RED")
.setTitle(`${no} **Error!**`)
.setDescription(`You didn't provide a time!`);

if (!time) return message.channel.send(errEmbed2);

if(args[0] === "civilian"){

    message.channel.send([
        `<@&${civilianrole.id}>`,
        ` `,
        "**Civilian Basic Training on**",
        `\`${day}\` **at** \`${time}\` **PM BST**`,
        ` `,
        `**To attend, press the ${yes} below.**`,
        `If you were attending but can't anymore, message us in the general chat before the training starts.`
        ` `,
        `If you are attending, please join the Civilian Training Waiting room 5 minutes prior to the announced time above.`
      ].join('\n'))
    
      message.delete().catch(O_o=>{});

      return; 
      }

      if(args[0] === "bcso"){

        message.channel.send([
            `<@&${bcsorole.id}>`,
            ` `,
            "**BCSO Basic Training on**",
            `\`${day}\` **at** \`${time}\` **PM BST**`,
            ` `,
            `**To attend, press the ${yes} below.**`,
            `If you were attending but can't anymore, message us in the general chat before the training starts.`,
            ` `,
            `If you are attending, please join the BCSO Training Waiting room 5 minutes prior to the announced time above.`
          ].join('\n'))
        
          message.delete().catch(O_o=>{});

          return; 
          }

        if(args[0] === "lsfd"){

            message.channel.send([
                `<@&${lsfdrole.id}>`,
                ` `,
                "**LSFD Basic Training on**",
                `\`${day}\` **at** \`${time}\` **PM BST**`,
                ` `,
                `**To attend, press the ${yes} below.**`,
                `If you were attending but can't anymore, message us in the general chat before the training starts.`,
                ` `,
                `If you are attending, please join the LSFD Training Waiting room 5 minutes prior to the announced time above.`
              ].join('\n'))
            
              message.delete().catch(O_o=>{});

              return; 
              }

              if(args[0] === "communications"){

                message.channel.send([
                    `<@&${commsrole.id}>`,
                    ` `,
                    "**Communications Basic Training on**",
                    `\`${day}\` **at** \`${time}\` **PM BST**`,
                    ` `,
                    `**To attend, press the ${yes} below.**`,
                    `If you were attending but can't anymore, message us in the general chat before the training starts.`,
                    ` `,
                    `If you are attending, please join the Communications Training Waiting room 5 minutes prior to the announced time above.`
                  ].join('\n'))
                
                  message.delete().catch(O_o=>{});
                  
                  return; 
                  }

    let errEmbed3 = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle(`${no} **Error!**`)
    .setDescription(`You didn't provide what type of training!`);

    message.channel.send(errEmbed3);

  message.delete().catch(O_o=>{});

//} catch(err) {
//    catchErr(err)
    
//}

}


module.exports.help = {
    name: "training"
}
