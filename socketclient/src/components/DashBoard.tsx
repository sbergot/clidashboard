import * as React from "react";
import * as Contracts from "../Contracts";
import { source } from "../Source";
import { State } from "../State";
import { Log } from "./Log";

interface DashBoardProps {url :string;};
interface DashBoardSate {
    sections : Contracts.Section[];
    currentSection : Contracts.Section
};

export class DashBoard extends React.Component<DashBoardProps, DashBoardSate> {
    mstate : State;

    constructor(props : DashBoardProps) {
        super(props)
        this.mstate = new State();
        this.state = this.getmState();
        source(this.props.url, (m) => this.onMessage(m));
    }

    getmState() : DashBoardSate {
        var state = this.mstate;
        return {
            sections : state.sections,
            currentSection : state.currentSection
        };
    }

    onMessage(message : Contracts.Message) {
        this.mstate.log(message);
        this.setState(this.getmState());
    }

    render() {
        var logs = this.state.currentSection.logs;
        var logElts = logs.map(l => <Log {...l} />);
        return <div>{logElts}</div>
    }
}