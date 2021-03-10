// 'use strict';
// This is where I will be doing the rendering of the React Components

class Main extends React.Component {
    render() {
        // return (
        //     <div>
        //     <h1 className="title">Load the Data</h1>
        //     <h2 className="button-title">Click the Button below to load the table</h2>
        //     </div>
        //     );
        return (
            <div>
                <h1 className="Title">This is a React frontend</h1>
                <h2 className="Subtitle">Press the button below to load data</h2>
                <TheButton />
            </div>
            );
    }
};

ReactDOM.render(<Main />, document.getElementById("root"));
