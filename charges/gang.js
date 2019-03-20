const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

  if(args[0] === "crimes"){

let argembed = new Discord.RichEmbed()
  .setTitle("**Gang Crimes Clause (10)09 Info**")
  .setColor("BLACK")
  .addField("Information", "Any person who is convicted of a felony committed for the benefit of, at the direction of, or in association with a criminal gang, or with the specific intent to promote, further, or assist in any criminal conduct by gang members, may be punished as follows: if the felony is a serious felony, the person may be punished by an additional term of three (3) to five (5) years depending on the circumstances of the offense (( 30 - 60 minutes at officer's discretion )); if the felony is a violent felony, the person may be punished by an additional term of eight (8) to ten (10) years depending on the circumstances of the offense (( 60 - 90 minutes at officer's discretion)). \"Serious felony\" means any of the following: P.C. 2-01. Arson; P.C. 2-06. Robbery; P.C. 2-12. Grand Theft Of A Firearm; P.C. 2-14. Extortion; P.C. 3-10. Stalking; P.C. 4-05. Dissuading A Witness Or Victim; P.C. 4-18. Tampering With Evidence; P.C. 5-03. Incitement To Riot; P.C. 6-02. Possession Of A Controlled Substance With Intent To Sell; P.C. 6-04. Maintaining A Place For The Purpose Of Distribution; P.C. 6-05. Manufacture Of A Controlled Substance; P.C. 6-06. Sale Of A Controlled Substance; P.C. 9-03. Possession Of An Illegal Firearm; P.C. 9-04. Possession Of An Assault Weapon; P.C. 9-05. Unlicensed Distribution Of A Weapon; P.C. 9-06. Possession Of An Explosive Device; P.C. 9-07. Manufacture or Possession of an Improvised Device; P.C. 9-08. Possession of Weaponry With Intent To Sell; P.C. 9-09. Possession Of Explosive Devices With Intent To Sell. \"Violent felony\" means any of the following: P.C. 1-03 Assault with a Deadly Weapon; P.C. 1-07. Attempted Murder; P.C. 1-08. Manslaughter; P.C. 1-09. Murder; P.C. 1-11. Kidnapping; P.C. 1-12. Mayhem; P.C. 1-13. Vehicular Murder; P.C. 2-07. Armed Robbery; P.C. 3-08. Rape; P.C. 3-09. Statutory Rape; P.C 4-16. Human Trafficking; P.C. 5-05. Terrorism; P.C. 8-08. Hit And Run; P.C. 9-12. Drive-By Shooting. (( Usage of Section 10(09) of the Penal Code is restricted to the courts and to detectives and uniformed officers belonging to an investigative unit. This charge can only be applied once per arrest and is non-stackable. ))");

  message.channel.send(argembed);

  return; 
  }

message.reply("If you are looking for \'Gang Crimes Clause\' type: !gang crimes clause");

}

module.exports.help = {
    name: "gang"
}
