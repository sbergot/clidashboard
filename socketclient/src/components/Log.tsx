import * as React from "react";
import { Message } from "../Contracts";

export function Log(props : Message) {
    return <p>{props.msg}</p>;
}