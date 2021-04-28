'use strict';
import React, { useState } from 'react';
import { render } from 'react-dom'

const App = () => {
    const [usage, setUsage] = useState({data: []});
    return (<div><h1>Hello there sport!</h1></div>);
}
render(<App />, document.getElementById("main"));