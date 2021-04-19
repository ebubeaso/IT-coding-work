// 'use strict';
// This is where I will be doing the rendering of the React Components

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
            </div>
            );
    }
};

ReactDOM.render(<Main />, document.getElementById("root"));
