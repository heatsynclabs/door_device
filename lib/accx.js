class ACCX {
  static parse() {
    switch (line) {
      case /(\d*) unlocked$/: // ends line
        console.log(">Door #{$1} unlocked\n");
      case /All Doors relocked/:
        console.log(">All Doors relocked\n");
      case /Door (\d*) locked$/: // ends line
        console.log(">Door #{$1} locked\n");
      case /User ([\dA-F]*) presented tag at reader (\d)/:
        console.log(">User #{$1} presented tag at reader #{$2}\n");
      case /User ([\dA-F]*) granted access at reader (\d)/:
        console.log(">User #{$1} granted access at reader #{$2}\n");
      case /User ([\dA-F]*) denied access at reader (\d)/:
        console.log(">User #{$1} denied access at reader #{$2}\n");
      case /Command ([\dA-F]*) entered at reader (\d)/:
        console.log(">Command #{$1} entered at reader #{$2}\n");
      case /Zone (\d?) sensor activated/:
        console.log(">Zone #{$1} sensor activated\n");
      case /User (\d?) unlocked door (\d)/:
        console.log(">User #{$1} unlocked door #{$2}\n");
      case /Door 1 locked for (\d+) bed time/:
        console.log("Door 1 locked for #{$1} bed time\n");
      case /User (\d+) locked out/:
        console.log("User #{$1} locked out\n");
      case /User (\d+) locked out/:
        console.log("User #{$1} locked out\n");
      case /Sensor (\d+) value:(\d+)/:
        console.log("Sensor #{$1} value:#{$2}\n");
      case /Alarm triggered/:
        console.log("Alarm triggered\n");
      case /Alarm level changed to (\d*)/:
        console.log(">Alarm level changed to #{$1}\n");
      case /Alarm armed level changed to (\d*)/:
        console.log(">Alarm armed level changed to #{$1}\n");
      case /User database erased/:
        console.log("User database erased\n");
      case /Invalid user modify attempted/:
        console.log("Invalid user modify attempted\n");
      case /User (\d*) successfully modified/:
        console.log(">User #{$1} successfully modified\n");
      case /Invalid user delete attempted/:
        console.log("Invalid user delete attempted\n");
      case /User deleted at position (\d*)/:
        console.log("User deleted at position #{$1}\n");
      case /User deleted at position (\d*)/:
        console.log(">User deleted at position #{$1}\n");
      case /User (\d+) authenticated/:
        console.log("User #{$1} authenticated\n");
      case /User not found/:
        console.log("User not found\n");
      case /Bad user number/:
        console.log("Bad user number\n");
      case /User dump started/:
        console.log(">User dump started\n");
      case /Invalid door number/:
        console.log("Invalid door number\n");
      case /Alarm armed state \(1=armed\):(\d*)/:
        console.log(">Alarm armed state: #{$1}\n");
      case /Alarm siren state \(1=activated\):(\d*)/:
        console.log(">Alarm siren state: #{$1}\n");
      case /Front door open state \(0=closed\):(\d*)/:
        console.log(">Front door open state: #{$1}\n");
      case /Roll up door open state \(0=closed\):(\d*)/:
        console.log(">Roll up door open state: #{$1}\n");
      case /Door 1 unlocked state\(1=locked\):(\d*)/:
        console.log(">Door 1 unlocked state: #{$1}\n");
      case /Door 2 unlocked state\(1=locked\):(\d*)/:
        console.log(">Door 2 unlocked state: #{$1}\n");
      case /^(\d+)\t+(\d+)\t+([\dA-Fa-f]+)$/:
        console.log(">User #{$1} mask #{$2} tag #{$3}\n"); // User dump info
      case /Priveleged mode enabled./:
        console.log(">Priveleged mode enabled.\n");
      case /Priveleged mode disabled./:
        console.log(">Priveleged mode disabled.\n");
      case /Access Denied. Priveleged mode is not enabled./:
        console.log(">Access Denied. Priveleged mode is not enabled.\n");
      case /Valid commands are/:
        console.log("?Valid commands are\n"); // Help output
      case /^\(/:
        console.log("?"+sline+"\n"); // Help output
      case /^           <day 0..31> <mon 0..12> <year 0.99>/:
        console.log("?"+sline+"\n"); // Help output
      case /^[\d:]{5,8}\s+[\d\/]{5,8}\s+[A-Z]{3}\s+$/:
        console.log(">"+sline+"\n"); // Date output only
      case /^Old time :([\d:]{5,8})\s+([\d\/]{5,8})\s+([A-Z]{3})\s+$/:
        console.log(">Old time: #{$1} #{$2} #{$3}\n");
      case /^New time :([\d:]{5,8})\s+([\d\/]{5,8})\s+([A-Z]{3})\s+$/:
        console.log(">New time: #{$1} #{$2} #{$3}\n");
      case /Reader1-0:(\d*)/:
        console.log(">Reader1-0:#{$1}\n"); // Status output
      case /Reader1-1:(\d*)/:
        console.log(">Reader1-1:#{$1}\n"); // Status output
      case /Reader2-0:(\d*)/:
        console.log(">Reader2-0:#{$1}\n"); // Status output
      case /Reader2-1:(\d*)/:
        console.log(">Reader2-1:#{$1}\n"); // Status output
      case /Zone 1:(\d*)/:
        console.log(">Zone 1:#{$1}\n"); // Status output
      case /Zone 2:(\d*)/:
        console.log(">Zone 2:#{$1}\n"); // Status output
      case /Zone 3:(\d*)/:
        console.log(">Zone 3:#{$1}\n"); // Status output
      case /Zone 4:(\d*)/:
        console.log(">Zone 4:#{$1}\n"); // Status output
      case /Zone TAMP:(\d*)/:
        console.log(">Zone TAMP:#{$1}\n"); // Status output
      case /Relays and LEDs ([a-z]*)/:
        console.log(">Relays and LEDs #{$1}\n"); // Status output
      case /Relays and LEDs ([a-z]*)/:
        console.log(">Relays and LEDs #{$1}\n"); // Status output
      case /UserNum: Usermask: TagNum:/:
        // nothing, we don't care
      case /Pass: /:
        // nothing, we don't care
      case /^\d+$/:
        // nothing, we don't care
      default:
        console.log("ERR: UNKNOWN: "+sline.inspect+"\n"); // Error output
    }
  }
}