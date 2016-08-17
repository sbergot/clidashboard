var outsocket = new WebSocket("ws://localhost:9001");
outsocket.onopen = function (event) {
  outsocket.send('{ "type": "texte", "message": "Prêt" }' );     
};

var insocket = new WebSocket("ws://localhost:9000");
insocket.onmessage = function(event) {
    var div = document.createElement("div");
    div.textContent = event.data;
    document.body.appendChild(div)
}
