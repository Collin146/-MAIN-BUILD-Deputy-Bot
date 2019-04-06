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
        .setTitle("**Title 7 - Crimes Against State Dependents**")
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

    if(args[0] === "8"){

        let intim8embed = new Discord.RichEmbed()
        .setTitle("**Title 8 - Vehicular Offenses**")
        .setDescription("These are all of the Title 8 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Driving With A Suspended License (8)01", "!driving with a suspended license")
        .addField("Evading A Peace Officer (8)02", "!evading a peace officer")
        .addField("Evading A Peace Officer --- High Performance Vehicle (8)03", "!evading a peace officer --- high performance vehicle")
        .addField("Evading A Peace Officer --- Oversized Vehicle (8)04", "!evading a peace officer --- oversized vehicle")
        .addField("Evading A Peace Officer --- Naval Vessel (8)05", "!evading a peace officer --- naval vessel")
        .addField("Evading A Peace Officer --- Aircraft (8)06", "!evading a peace officer --- aircraft")
        .addField("Flying Without A Pilot's License (8)07", "!flying without a pilot's license")
        .addField("Hit And Run (8)08", "!hit and run")
        .addField("Reckless Operation Of An Aircraft (8)09", "!reckless operation of an aircraft")
        .addField("Reckless Operation Of An Off-Road Or Naval Vehicle (8)10", "!reckless operation of an off-road or naval vehicle")
        .addField("Failure To Adhere ATC Protocols (8)11", "!failure to adhere atc protocols")
        .addField("Failure To Adhere Flight Protocols (8)12", "!failure to adhere flight protocols")
        .addField("Restricted Airspace Violation (8)13", "!restricted airspace violation");

        message.channel.send(intim8embed);

        return;
    }

    if(args[0] === "9"){

        let intim9embed = new Discord.RichEmbed()
        .setTitle("**Title 9 - Control Of Deadly Weapons And Equipment**")
        .setDescription("These are all of the Title 9 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Possession Of A Prohibited Weapon (9)01", "!possession of a prohibited weapon")
        .addField("Possession Of An Unlicensed Firearm (9)02", "!possession of an unlicensed firearm")
        .addField("Possession Of An Illegal Firearm (9)03", "!possession of an illegal firearm")
        .addField("Possession Of An Assault Weapon (9)04", "!possession of an assault weapon")
        .addField("Unlicensed Distribution Of A Weapon (9)05", "!unlicensed distritbution of a weapon")
        .addField("Possession Of An Explosive Device (9)06", "!possession of an explosive device")
        .addField("Manufacture Or Possession Of An Improvised Device (9)07", "!manufacture or possession of an improvised device")
        .addField("Possession Of Weaponry With Intent To Sell (9)08", "!possession of weaponry with intent to sell")
        .addField("Possession Of Explosive Devices With Intent To Sell (9)09", "!possession of explosive devices with intent to sell")
        .addField("Brandishing A Firearm (9)10", "!brandishing a firearm")
        .addField("Weapons Discharge Violation (9)11", "!weapons discharge violation")
        .addField("Drive-By Shooting (9)12", "!drive-by shooting")
        .addField("CCW / PF Violation (9)13", "!ccw / pf violation");

        message.channel.send(intim9embed);

        return;
    }

    if(args[0] === "10"){

        let intim10embed = new Discord.RichEmbed()
        .setTitle("**Title 10 - Sentencing Enhancements**")
        .setDescription("These are all of the Title 10 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Attempt (10)01", "!attempt")
        .addField("Conspiracy (10)02", "!conspiracy")
        .addField("Soliciting (10)03", "!soliciting")
        .addField("Government Worker Clause (10)04", "!government worker clause")
        .addField("Plea Bargaining / Police Compliance Clause (10)05", "!plea bargaining / police compliance clause")
        .addField("Three-Strikes Vehicle Policy (10)06", "!three-strikes vehicle policy")
        .addField("Criminal Accomplice Clause (10)07", "!criminal accomplice clause")
        .addField("Accessory After The Fact (10)08", "!accessory after the fact")
        .addField("Gang Crimes Clause (10)09", "!gang crimes clause");

        message.channel.send(intim10embed)

        return;
    }

    if(args[0] === "11"){

        let intim11embed = new Discord.RichEmbed()
        .setTitle("**Title 11 - Road Law**")
        .setDescription("These are all of the Title 11 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Failure To Abide To A Traffic Control Device (11)01", "!failure to abide to a traffic control device")
        .addField("Yield Violation (11)02", "!yield violation")
        .addField("Parking Violation (11)03", "!parkin violation")
        .addField("Reckless Driving (11)04", "!reckless driving")
        .addField("Vehicular Endangerment (11)05", "!vehicular endangerment")
        .addField("Vehicular Noise Violation (11)06", "!vehicular noise violation")
        .addField("Illegal Nitrous Oxide Possession (11)07", "!illegal nitrous oxide possession")
        .addField("Illegal Usage Of Hydraulics (11)08", "!illegal usage of hydraulics")
        .addField("Driving While Impaired (DWI) (11)09", "!driving while impaired")
        .addField("Driving Under The Influence (DUI) (11)10", "!driving under the influence")
        .addField("Registration Violation (11)11", "!registration violation")
        .addField("Unsafe Usage Of A Bicycle (11)12", "!unsafe usage of a bicycle")
        .addField("Street Racing (11)13", "!street racing")
        .addField("Driving Without A Valid License (11)14", "!driving without a valid license")
        .addField("Jaywalking (11)15", "!jaywalking")
        .addField("Illegal Parking Of An Aircraft (11)16", "!illegal parking of an aircraft")
        .addField("Tinted Windows (11)17", "!tinted windows")
        .addField("Unlawful Transport Of Persons In A Cargo Area (11)18", "!unlawful transport of persons in a cargo area")
        .addField("Fire Hydrant Parking Restriction (11)19", "!fire hydrant parking restriction");

        message.channel.send(intim11embed);

        return;
    }

    if(args[0] === "11(.5)"){

        let intim115embed = new Discord.RichEmbed()
        .setTitle("**Title 11(.5) - Road Law Extensive**")
        .setDescription("These are all of the Title 11(.5) charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Traffic Signals - Responsibility At A Green Light (11.5)01", "!traffic signals - responsibility at a green light")
        .addField("Traffic Signals - Responsibility At A Red Light (11.5)02", "!traffic signals - responsibility at a red light")
        .addField("Driving On The Right Side (11.5)03", "!driving on the right side")
        .addField("Maintaining Lanes (11.5)04", "!maintaining lanes")
        .addField("Following Distance (11.5)05", "!following distance")
        .addField("Right Of Way (11.5)06", "!right of way")
        .addField("Right Of Way Emergancy Vehicles (11.5)07", "!right of way emergancy vehicles")
        .addField("Turning (11.5)08", "!turning")
        .addField("Speeding Over 100 MPH (11.5)09", "!speeding over 100 mph")
        .addField("Speeding 1-15 MPH Over (11.5)10", "!speeding 1-15 mph over")
        .addField("Speeding 16-25 MPH Over (11.5)11", "!speeding 16-25 mph over")
        .addField("Speeding 26+ (11.5)12", "!speeding 26+")
        .addField("Unreasonably Slow / Stopped (11.5)13", "!unreasonably slow / stopped")
        .addField("Stop Signs (11.5)14", "!stop signs")
        .addField("Throwing Objects (11.5)15", "!throwing objects")
        .addField("Vehicle Lights (11.5)16", "!vehicle lights")
        .addField("Road Rage (11.5)17", "!road rage")
        .addField("Helmet Law (11.5)18", "!helmet law")
        .addField("Unsecured Load (11.5)19", "!unsecured load")
        .addField("Visible Plate (11.5)20", "!visible plate")
        .addField("Unnecessary Use Of Horn (11.5)21", "!unnecessary use of horn")
        .addField("Window Tint (11.5)22", "!window tint")
        .addField("Operating A Vehicle With Open Doors (11.5)23", "!operating a vehicle with open doors")
        .addField("Driving On Shoulder/Emergancy Lane (11.5)24", "!driving on shoulder/emergancy lane")
        .addField("Failure To Sign A Citation (11.5)25", "!failure to sign a citation");

        message.channel.send(intim115embed);

        return;
    }

    //11,05
    //11,05
    //11,05
    //11,05

    if(args[0] === "12"){

        let intim12embed = new Discord.RichEmbed()
        .setTitle("**Title 12 - Code Policy**")
        .setDescription("These are all of the Title 12 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Mistake Of Fact (12)01", "!mistake of fact")
        .addField("Involuntary Intoxication (12)02", "!involuntary intoxication")
        .addField("Private Defense, Self Defense, Castle Doctrine, And Defense Of Others (12)03", "!private defense, self defense, castle doctrine, and defense of others")
        .addField("Necessity (12)04", "!necessity")
        .addField("Entrapment (12)05", "!entrapment")
        .addField("Duress (12)06", "!duress")
        .addField("Parole Exclusions (12)07", "!parole exclusions")
        .addField("Suspicion Policy (12)08", "!suspicion policy")
        .addField("Officer Discretion (12)09", "!officer discretion")
        .addField("Good Samaritan Clause (12)10", "!good samaritan clause")
        .addField("Imprisonment & Punishment Criteria (12)11", "!imprisonment & punishment criteria")
        .addField("Maximum Imprisonment (12)12", "!maximum imprisonment")
        .addField("Wiretapping, CCTV & Videotaping Policy (12)13", "!wiretapping, cctv & videotaping policy")
        .addField("Police Exigency & Hot Pursuit Policy (12)14", "!police exigency & hot pursuit policy")
        .addField("Probable Cause & Plain View Policy (12)15", "!probable cause & plain view policy")
        .addField("Criminal Fines (12)16", "!criminal fines")
        .addField("Repeat Offender Clause (12)17", "!repeat offender clause")
        .addField("Immunity (12)18", "!immunity");

        message.channel.send(intim12embed);

        return;
    }

    if(args[0] === "13"){

        let intim13embed = new Discord.RichEmbed()
        .setTitle("**Title 13 - State Code Violations**")
        .setDescription("These are all of the Title 13 charges & commands to get the information about them.")
        .setColor("ffffff")
        .addField("Tax Evasion (13)01", "!tax evasion")
        .addField("Laundering Of Money Instruments (13)02", "!laundering of money instruments")
        .addField("Gambling License Violation (13)03", "!gambling license violation")
        .addField("Medical Practice Violation (13)04", "!medical practice violation")
        .addField("Legal Practice Violation (13)05", "!legal practice violation")
        .addField("Construction And Maintenance Code Violation (13)06", "!construction and maintenance violation")
        .addField("Criminal Fire Code Violation (13)07", "!criminal fire code violation")
        .addField("Failure To Comply With Fire Code Orders (13)08", "!failure to comply with fire code orders")
        .addField("Wiretapping Violation (13)09", "!wiretapping violation")
        .addField("Criminal Business Operations (13)10", "!crimina business operations")
        .addField("Corporate Hijacking (13)11", "!corporate hijacking");

        message.channel.send(intim13embed);

        return;
    }

message.reply("If you are looking for a title type: !title <title number>. Check: !titles to look up all of the title numbers.")

}

module.exports.help = {
    name: "title"
}
