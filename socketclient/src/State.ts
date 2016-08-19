var state = [];
var currentSection;

function newSection(name) {
  currentSection = {name: name, log: []};
  state.push(currentSection);
}

function log(message, time) {
  currentSection.log.push({message: message, time: time});
}

newSection("(no section)")

