import React from "react";
import ReactDOM  from "react-dom";
import { Main } from "./App";

export const App: React.FC = () => {
    return <Main/>
}

ReactDOM.render(<App/>, document.getElementById("main"));