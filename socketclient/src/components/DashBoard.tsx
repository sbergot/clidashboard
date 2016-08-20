import * as React from "react";
import * as Contracts from "../Contracts";
import { source } from "../Source";
import { State } from "../State";

interface DashBoardProps {url :string;};

export class DashBoard extends React.Component<DashBoardProps, {}> {
    contructor(props : DashBoardProps) {

    }
    render() {
        return <h1>hello!!</h1>;
    }
}