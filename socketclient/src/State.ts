import * as Contracts from "./Contracts";

export class State {
  sections : Contracts.Section[];
  currentSection : Contracts.Section ;

  constructor() {
    this.sections = [];
    this.newSection("(no section)");
  }

  newSection(name : string) {
    this.currentSection = {name: name, logs: <Contracts.Message[]>[]};
    this.sections.push(this.currentSection);
  }

  log(message : Contracts.Message) {
    this.currentSection.logs.push(message);
  }
}

