"use strict"
/*
This is the main TypeScript file where all the code comes together. This is to make
a simgle page web application that handles the date range that you put in to
*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./Header";

export const Main: React.FC = () => {
    return <Header/>
}

ReactDOM.render(<Main/>, document.getElementById("main"));