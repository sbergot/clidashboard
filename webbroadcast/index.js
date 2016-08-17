var WebSocketServer = require("websocketserver");
var outserver = new WebSocketServer("none", 9000);
var inserver = new WebSocketServer("none", 9001);
inserver.on("message", function(data) {
     var mes = inserver.unmaskMessage(data);
     var packagedMessage = inserver.packageMessage(mes.opcode, mes.message);
     outserver.sendMessage('all', packagedMessage);
});