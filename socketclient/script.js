var outsocket = new WebSocket("ws://localhost:9001");
outsocket.onopen = function (event) {
  outsocket.send('{ "type": "texte", "message": "Prêt" }' );     
};

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

var sectionRegex = /--.*/;

var insocket = new WebSocket("ws://localhost:9000");
insocket.onmessage = function(event) {
    var signal = JSON.parse(event.data);
    var timestamp = new Date(signal.time);
    if(sectionRegex.test(signal.message)) {
      newSection(signal.message);
    } else {
      log(signal.message, timestamp);
    }
    document.body.textContent = JSON.stringify(state);
};