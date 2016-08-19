export interface Message {
    msg : string;
    time : Date;
}

export function source(url : string, onmessage : (message : Message) => void) {
    var insocket = new WebSocket(url);
    insocket.onmessage = (ev) => {
        var signal = JSON.parse(ev.data);
        var timestamp = new Date(signal.time);
        onmessage({msg : signal.message, time : timestamp});
    };
}
