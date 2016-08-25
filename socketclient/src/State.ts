import * as Contracts from "./Contracts";

export class State {
  sections : Contracts.Section[];
  currentSection : Contracts.Section ;

  constructor(private sectionRe : RegExp) {
    this.sections = [];
    this.newSection("(no section)");
  }

  newSection(name : string) {
    this.currentSection = {name: name, logs: <Contracts.Message[]>[]};
    this.sections.push(this.currentSection);
  }

  log(message : Contracts.Message) {
    var matches = message.msg.match(this.sectionRe)
    if (matches != null && matches.length > 1) {
      this.newSection(matches[1]);
    } else {
      this.currentSection.logs.push(message);
    }
  }
}

