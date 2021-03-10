'use strict';
//This will have the Button component to run with react
class TheButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showTable: false}; // for conditional rendering
        // binds the buttonClick function to this state (makes the component stateful)
        this.buttonClick = this.buttonClick.bind(this);
    };
    // sets the state to true to show the data table
    buttonClick() {
        this.setState({showTable: true});
    };
    render() {
        // renders the button
        return (
            <div>
                <button className="Click" onClick={this.buttonClick}>Click Me</button>
                {/* {This ternary operator is used to determine whether to show the table
                    or not, depending if the button is clicked} */}
                {this.state.showTable ? <DataTable /> : null} 
            </div>
        );
    }
};
// this component shows the data from the MariaDB database
class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: []};
    }
    // Get the luxury car data from the Node.js backend
    /* First it gets the response, then it takes the data and changes the state of cars
    to an array of objects that represent each car from the data query. The err just catches
    any errors */
    componentDidMount() {
        fetch("http://localhost:3001/table")
            .then(response => response.json())
            .then(data => this.setState({cars: data}))
            .then(err => {throw err;})
    };
    render() {
        // This is responsible for rendering the table
        return (
        <div className="MyTable">
        <h1 className="Title">Luxury Cars Table</h1>
        <table>
            {/* The thead is for the column headers */}
            <thead>
            <tr>
                <th>Brand Name</th>
                <th>Model Name</th>
                <th>Year</th>
                <th>Is Automatic</th>
            </tr>
            </thead>
            <tbody>
            {/* This uses the map function, which iterates through the array of objects
            and maps a value in each object as a value for a HTML element. It needs a key, a
            unique identifier, so I used the id of the data since it will be the unique key */}
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