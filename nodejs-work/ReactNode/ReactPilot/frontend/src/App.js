'use strict';
//This will have the Button component to run with react
class TheButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showTable: false};
        // binds the buttonClick function to this state (makes the component stateful)
        this.buttonClick = this.buttonClick.bind(this);
    };
    // sets the state to true to show the data table
    buttonClick() {
        this.setState({showTable: true});
    };
    render() {
        return (
            <div>
                <button className="Click" onClick={this.buttonClick}>Click Me</button>
                {this.state.showTable ? <DataTable /> : null}
            </div>
        );
    }
};
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: []};
    }
    // Get the luxury car data from the Node.js backend
    componentDidMount() {
        fetch("http://localhost:3001/table")
            .then(response => response.json())
            .then(data => this.setState({cars: data}))
            .then(err => {throw err;})
    };
    render() {
        return (
        <div className="MyTable">
        <h1 className="Title">Luxury Cars Table</h1>
        <table>
            <thead>
            <tr>
                <th>Brand Name</th>
                <th>Model Name</th>
                <th>Year</th>
                <th>Is Automatic</th>
            </tr>
            </thead>
            <tbody>
            {this.state.cars.map((car) => (
                <tr key={car.id}>
                    <td>{car.BrandName}</td>
                    <td>{car.ModelName}</td>
                    <td>{car.Year}</td>
                    <td>{car.isAutomatic}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        )
    };
};