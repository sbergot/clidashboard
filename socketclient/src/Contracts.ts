export interface Message {
    msg : string;
    time : Date;
}

export interface Section {name : string; logs : Message[]}
