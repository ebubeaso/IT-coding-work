import React from "react";
import { render } from "react-dom";
import Router from "./Router";

const Main: React.FC = () => {
    return <Router/>
}
render(<Main/>, document.getElementById("root"))