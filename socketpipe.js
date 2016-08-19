var websocket = require('websocket-stream')
var readline = require('readline');

var ws = websocket('ws://localhost:9001')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    ws.write(JSON.stringify({message: line, command: "feed"}));
}).on('close', function() {
    process.exit(0);
})