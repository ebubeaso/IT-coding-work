'use strict';
// This is the frontend React template code for visualizing the d3 data

// Since we are doing this for testing, we are going to import some modules
import React from 'react';
import Graph from './graph';
export default class App extends React.Component {
    // setup the constructor
    constructor(props) {
        super(props);
        this.state = {getData: false};
        /* 
        binds the button click function to the constructor
        (This will help with changing the state)
         */
        this.clickButton = this.clickButton.bind(this);
    };
    // function that changes the state of the graph
    clickButton() {
        this.setState({getData: true});
    };

    // render the component
    render() {
        return (
            <div>
                <h1 className="Title">Show the data</h1>
                <br />
                <button id="button" className="Click-me" onClick={this.clickButton}>Click to load the graph</button>
                {this.state.getData ? <Graph /> : ""}
            </div>
        )
    };
};

//ReactDOM.render(<App />, document.getElementById("root"));