const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "vehicle"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Three-Strikes Vehicle Policy (10)06 Info**")
  .setColor("BLACK")
  .addField("Information", "A person who drives a vehicle and receives three driver warnings shall have their vehicle impounded and their license revoked for between twelve (12) and forty-eight (48) hours at the officer’s discretion. An individual who violates a penal code entry that states a specific punishment, such as a license revocation, shall have their vehicle impounded and licensed revoked for seven (7) days. All warnings on record are removed upon revocation or suspension and the three-strikes vehicle policy resets.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Three-Strikes Vehicle Policy\' type: !three-strikes vehicle policy");

}

module.exports.help = {
    name: "three-strikes"
}
