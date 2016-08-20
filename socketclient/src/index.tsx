import * as React from "react";
import * as ReactDom from "react-dom";

import { DashBoard } from "./components/DashBoard";

ReactDom.render(
    <DashBoard url="ws://localhost:9000" />,
    document.getElementById("example")
);