const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => { 

if(args[0] === "1"){

let intimembed = new Discord.RichEmbed()
.setTitle("**Title 1 - Crimes Against The Person**")
.setDescription("These are all of the Title 1 charges & commands to get the information about them.")
.setColor("ffffff")
.addField("Intimidation (1)01", "!intimidation")
.addField("Assault (1)02", "!assault")
.addField("Assault With A Deadly Weapon (1)03", "!assault with a deadly weapon")
.addField("Mutual Combat (1)04", "!mutual combat")
.addField("Battery (1)05", "!battery")
.addField("Aggravated Battery (1)06", "!aggravated battery")
.addField("Attempted Murder (1)07", "!attempted murder")
.addField("Manslaughter (1)08", "!manslaughter")
.addField("Murder (1)09", "!murder")
.addField("False Imprisonment (1)10", "!false imprisonment")
.addField("Kidnapping (1)11", "!kidnapping")
.addField("Mayhem (1)12", "!mayhem")
.addField("Vehicular Murder (1)13", "!vehicular murder");

message.channel.send(intimembed);

return;
}

if(args[0] === "2"){

    let intim2embed = new Discord.RichEmbed()
    .setTitle("**Title 2 - Crimes Against Property And Criminal Profiteering**")
    .setDescription("These are all of the Title 2 charges & commands to get the information about them.")
    .setColor("ffffff")
    .addField("Arson (2)01", "!arson")
    .addField("Trespassing (2)02", "!trespassing")
    .addField("Trespassing within a Restricted Zone (2)03", "!trespassing within a restricted zone")
    .addField("Burglary (2)04", "!burglary")
    .addField("Possession Of Burglary Tools (2)05", "!possession of burglary tools")
    .addField("Robbery (2)06", "!robbery")
    .addField("Armed Robbery (2)07", "!armed robbery")
    .addField("Petty Theft (2)08", "!petty theft")
    .addField("Theft (2)09", "!theft")
    .addField("Grand Theft (2)10", "!grand theft")
    .addField("Grand Theft Auto (2)11", "!grand theft auto")
    .addField("Grand Theft Of A Firearm (2)12", "!grand theft of a firearm")
    .addField("Receiving Stolen Property (2)13", "!receiving stolen property")
    .addField("Extortion (2)14", "!extortion")
    .addField("Forgery (2)15", "!forgery")
    .addField("Fraud (2)16", "!fraud")
    .addField("Vandalism (2)17", "!vandalism");

    message.channel.send(intim2embed);
    
    return;
    }

    if(args[0] === "3"){

        let intim3embed = new Discord.RichEmbed()
        .setTitle("**Title 3 - Crimes Against Public Decency**")
        .setDescription("These are all of the Title 3 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Lewd Or Dissolute Conduct In Public (3)01", "!lewd or dissolute conduct in public")
        .addField("Indecent Exposure (3)02", "!indecent exposure")
        .addField("Prostitution (3)03", "!prostitution")
        .addField("Solicitation of Prostitution (3)04", "!solicitation of prostitution")
        .addField("Pandering / Pimping", "!pandering / pimping")
        .addField("Sexual Assault (3)06", "!sexual assault")
        .addField("Sexual Battery (3)07", "!sexual battery")
        .addField("Rape (3)08", "!rape")
        .addField("Statutory Rape (3)09", "!statutory rape")
        .addField("Stalking (3)10", "!stalking"); 

        message.channel.send(intim3embed)
        
        return;
    }

    if(args[0] === "4"){

        let intim4embed = new Discord.RichEmbed()
        .setTitle("**Title 4 - Crimes Against Public Justice**")
        .setDescription("These are all of the Title 4 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Bribery (4)01", "!bribery")
        .addField("Failure To Pay A Fine (4)02", "!failure to pay a fine")
        .addField("Contempt Of Court (4)03", "!contempt of court")
        .addField("Subpoena Violation (4)04", "!subpoena violation")
        .addField("Dissuading A Witness Or Victim (4)05", "!dissuading a victim")
        .addField("False Information To A Government Employee (4)06", "!false information to a government employee")
        .addField("Filing A False Complaint (4)07", "!filing a false complaint")
        .addField("Perjury (4)08", "!perjury")
        .addField("Failure To Identify To A Peace Officer (4)09", "!failure to identify to a peace officer")
        .addField("Impersonation Of A Government Employee (4)10", "!impersonation of a government employee")
        .addField("Obstruction Of A Government Employee (4)11", "!obstruction of a government employee")
        .addField("Resisting A Peace Officer (4)12", "!resisting a peace officer")
        .addField("Escape From Custody (4)13", "!escape from custody")
        .addField("Escape (4)14", "!escape")
        .addField("Prisoner Breakout (4)15", "!prisoner breakout")
        .addField("Tampering With Evidence (4)16", "!tampering with evidence")
        .addField("Human Trafficking (4)17", "!human trafficking")
        .addField("Misuse Of A Government Hotline (4)18", "!misuse of a government hotline")
        .addField("Introduction Of Contraband (4)19", "!introduction of contraband")
        .addField("Violation Of Parole Or Probation (4)20", "!violation of parole or probation")
        .addField("Voter Fraud / Voter Pandering (4)21", "!voter fraud / voter pandering")
        .addField("Corruption Of Public Duty (4)22", "!corruption of public duty")
        .addField("Corruption Of Public Office (4)23", "!corruption of public office")
        .addField("Contempt of Senate (4)24", "!contempt of senate");

        message.channel.send(intim4embed);
    
        return;
    }

    if(args[0] === "5"){

        let intim5embed = new Discord.RichEmbed()
        .setTitle("**Title 5 - Crimes Against Public Peace**")
        .setDescription("These are all of the Title 5 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Disturbing The Peace (5)01", "!disturbing the peace")
        .addField("Unlawful Assembly (5)02", "!unlawful assembly")
        .addField("Incitement To Riot (5)03", "!incitement to riot")
        .addField("Vigilantism (5)04", "!vigilantism")
        .addField("Terrorism (5)05", "!terrorism");

        message.channel.send(intim5embed);

        return;
    }

    if(args[0] === "6"){

        let intim6embed = new Discord.RichEmbed()
        .setTitle("**Title 6 - Crimes Against Public Health And Safety**")
        .setDescription("These are all of the Title 6 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Possession Of A Controlled Substance (6)01", "!possession of a controlled substance")
        .addField("Possession Of A Controlled Substance With Intent To Sell (6)02", "!possession of a controlled substance with intent to sell")
        .addField("Possession Of Drug Paraphernalia (6)03", "!possession of drug paraphernalia")
        .addField("Maintaining A Place For The Purpose Of Distribution (6)04", "maintaining a place for the purpose of distribution")
        .addField("Manufacture Of A Controlled Substance (6)05", "!manufacture of a controlled substance")
        .addField("Sale Of A Controlled Substance (6)06", "!sale of a controlled substance")
        .addField("Possession Of An Open Container (6)07", "!possession of an open container")
        .addField("Public Intoxication (6)08", "!public intoxication")
        .addField("Under The Influence Of A Controlled Substance (6)09", "!under the influence of a controlled substance")
        .addField("Facial Obstruction While Committing A Crime (6)10", "!facial obstruction while committing a crime")
        .addField("Possession Of Marijuana (6)11", "!possession of marijuana");
        
        message.channel.send(intim6embed);

        return;
    }

    if(args[0] === "7"){

        let intim7embed = new Discord.RichEmbed()
        .setTitle("**Title 7 - Crimes Against Public Health And Safety**")
        .setDescription("These are all of the Title 7 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Animal Abuse / Cruelty (7)01", "!animal abuse / cruelty")
        .addField("Child Abuse (7)02", "!child abuse")
        .addField("Sale Of Alcohol To A Minor (7)03", "!sale of alcohol to a minor")
        .addField("Minor Alcohol Violation (7)04", "!minor alcohol violation")
        .addField("Possession Of Child Pornography (7)05", "!possession of child pornography");

        message.channel.send(intim7embed);

        return;
    }

message.reply("If you are looking for a title type: !title <title number>. Check: !titles to look up all of the title numbers.")

}

module.exports.help = {
    name: "title"
}
