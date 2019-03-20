const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "violation"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Parking Violation (11)04 Info**")
  .setColor("BLACK")
  .addField("Type of Punishment", "Infraction")
  .addField("Punishment(s)", "$150")
  .addField("Information (1/2)", "A vehicle parked, with its driver outside the vehicle, in the following ways: In a manner that obstructs a lane of traffic and prevents the flow of traffic. In a manner that completely obstructs an alleyway. In a manner that obstructs a parking lot entrance, Within a marked crosswalk. In a manner that obstructs more than two thirds of a sidewalk or pedestrian path. on any median. Facing opposing traffic. On any bridges or tunnels. On any highway or freeway. On railroad tracks or within range of being struck by a railroad car. In the immediate ambulatory parking or bay area of a hospital or clinic.");

  message.channel.send(argembed);

let arg2embed =  new Discord.RichEmbed()
.setColor("BLACK")
.addField("Information (2/2)", " In the immediate vicinity of Rodeo Bank's entrance, including the sidewalk adjacent to the metal barriers. In front of or obstructing a private driveway or an entrance or exit to a private road or path. A vehicle parked in a manner not permitted by the property owner. Private property may set its own parking rules, so long as they do not obstruct any public roads or sidewalks. Policies may also be set by a property manager authorized by the property owner. State agencies, such as the LSPD and others, may set parking rules for the facilities they maintain. A person who sitting in a vehicle, with the engine on or off, in any above location and refuses to move at the request of a peace officer or, if private property, by the property manager.")
.setFooter("Note: This was split into two messages due to the max words in a message.");

 await message.channel.send(arg2embed);

  return; 
  }

message.reply("If you are looking for \'Parking Violation\' type: !Parking violation");

}

module.exports.help = {
    name: "parking"
}
