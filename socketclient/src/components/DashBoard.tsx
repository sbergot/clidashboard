import * as React from "react";
import * as Contracts from "../Contracts";
import { source } from "../Source";
import { State } from "../State";

interface DashBoardProps {url :string;};
interface DashBoardSate {
    sections : Contracts.Section[];
    currentSection : Contracts.Section;
    openSection : number;
};

export class DashBoard extends React.Component<DashBoardProps, DashBoardSate> {
    mstate : State;

    constructor(props : DashBoardProps) {
        super(props)
        this.mstate = new State(/--(.*)/);
        this.state = this.getmState(0);
        source(this.props.url, (m) => this.onMessage(m));
    }

    getmState(open : number) : DashBoardSate {
        var state = this.mstate;
        return {
            sections : state.sections,
            currentSection : state.currentSection,
            openSection : open != null ? open : this.state.openSection
        };
    }

    onMessage(message : Contracts.Message) {
        this.mstate.log(message);
        this.setState(this.getmState(null));
    }

    renderLogs(section : Contracts.Section) {
        return section.logs.map((l, i) =>
            <p key={"log" + i}>{l.msg}</p>
        );
    }

    selectSection(i : number) {
        this.setState(this.getmState(i));
    }

    render() {
        var sections = this.state.sections.map((s, i) => {
            var logs = this.state.openSection == i ? this.renderLogs(s) : null;
            return <div key={"sec" + i} onClick={() => this.selectSection(i)}>
                <h1>{s.name}</h1>
                {logs}
            </div>
        });
        return <div>
            {sections}
        </div>
    }
}