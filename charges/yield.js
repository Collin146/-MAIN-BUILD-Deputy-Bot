const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "violation"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Yield Violation (11)02 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Infraction")
  .addField("Punishment(s)", "$670")
  .addField("Information", "A person driving a vehicle that fails to yield, giving right of way, at an intersection that has other vehicles passing or waiting to turn. A person driving a vehicle that fails to yield, giving right of way, at any time to pedestrians or cyclist traffic. A person driving a vehicle that is standing, meaning not in motion and the driver is in the vehicle, on a public road or parking lot and refuses to keep moving upon order of a peace officer. Ignoring the emergency lights and sirens of an emergency vehicle requiring clearance.");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Yield Violation\' type: !yield violation");

}

module.exports.help = {
    name: "yield"
}
