var WebSocketServer = require("websocketserver");
var outserver = new WebSocketServer("none", 9000);
var inserver = new WebSocketServer("none", 9001);
inserver.on("message", function(data) {
     var mes = inserver.unmaskMessage(data);
     var obj = JSON.parse(inserver.convertToString(mes.message));
     if (obj.command === "feed") {
         var response = {message: obj.message, time: Date.now()};
        outserver.sendMessage('all', JSON.stringify(response));
     }
});