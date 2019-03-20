const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "policy"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Suspicion Policy (12)08 Info**")
  .setColor("BLACK")
  .addField("Information", "A peace officer's or court's justifiable suspicion of a person to commit or conspire to commit a crime is sufficient to allow that individual to be detained for questioning for no more than 60 minutes in police or court custody, however they cannot be searched beyond a legal Terry Frisk for the officer’s safety unless probable cause or concurrent evidence emerges. A person who is at the scene of a crime, riot, or major public disturbance may also be classified under the suspicion policy for temporary detainment. Violation of this policy, or an act of justifiable suspicion that extends beyond legal bounds, extends beyond Color of Law and is satisfactory for suit. A person who fails to identify themselves to a peace officer during arrest or arraignment shall be imprisoned for the maximum time allowed by the law until they can be successfully identified by a peace officer or the courts.");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Suspicion Policy\' type: !suspicion policy");

}

module.exports.help = {
    name: "suspicion"
}
