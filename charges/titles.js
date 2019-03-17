const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

let intimembed = new Discord.RichEmbed()
.setTitle("**All Penal Code Titles**")
.setDescription("These are all of the Penal Code Titles & commands. To see the charges that are under a specific title type: !title <number of title>.")
.setColor("ffffff")
.addField("Title 1 - Crimes Against The Person", "!title 1")
.addField("Title 2 - Crimes Against Property And Criminal Profiteering", "!title 2")
.addField("Title 3 - Crimes Against Public Decency", "!title 3")
.addField("Title 4 - Crimes Against Public Justice", "!title 4")
.addField("Title 5 - Crimes Against Public Peace", "!title 5")
.addField("Title 6 - Crimes Against Public Health And Safety", "!title 6")
.addField("Title 7 - Crimes Against State Dependents", "!title 7")
.addField("Title 8 - Vehicular Offenses", "!title 8")
.addField("Title 9 - Control Of Deadly Weapons And Equipment", "!title 9")
.addField("Title 10 - Sentencing Enhancements", "!title 10")
.addField("Title 11 - Road Law", "!title 11")
.addField("Title 11(.5) - Road Law Extensive", "!title 11(.5)")
.addField("Title 12 - Code Policy", "!title 12")
.addField("Title 13 - State Code Violations", "!title 13");


message.channel.send(intimembed);

}

module.exports.help = {
    name: "titles"
}
