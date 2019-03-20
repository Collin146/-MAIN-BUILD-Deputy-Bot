const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "cctv"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Wiretapping, CCTV & Videotaping Policy (12)13 Info**")
  .setColor("BLACK")
  .addField("Information", "The State of San Andreas shall have a one-party notification policy for wiretapping without appropriate surveillance warrants and authorizations. A person who is found to violate these wiretapping laws can be charged with (13)10. Wiretapping Violation. Moles, bugs, and other illegal surveillance falls under wiretapping laws and violations / policies. Government Employees may be recorded by civilians at all times when conducting their duties in an official capacity or when on-duty. ((CCTV is considered reasonably accessible to the courts when sourced from inside and around all public facilities, from police dashcams, or when subpoenaed by a private business that claims to have CCTV cameras installed. Public CCTVs cannot be tampered, modified, stolen, or destroyed.)) ((CCTVs in businesses must be explicitly recorded as existing on paperwork or a license to be used in court or accepted legally.))");

  message.channel.send(argembed);

  return; 
  }

  message.reply("If you are looking for \'Wiretapping, CCTV & Videotaping Policy\' type: !wiretapping, cctv & videotaping policy");

}

module.exports.help = {
    name: "wiretapping,"
}
