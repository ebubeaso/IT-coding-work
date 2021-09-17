import React from "react";
import { render } from "react-dom";
import Form from "./Form";

const Main: React.FC = () => {
    return <Form/>
}
render(<Main/>, document.getElementById("root"));