
class Table extends React.Component {
    //make the constructor
    constructor(props) {
        super(props);
        this.state = {table: []}
    };

    componentDidMount() {
        this.getTable();
    };

    getTable() {
        console.log(auth_token);
        fetch("http://10.0.0.192:5000/cars", {
            method: "GET",
            headers: {"Authorization": "Bearer " + auth_token}
        }).then(response => response.json())
        .then(data => this.setState({table: data}))
        .catch(error => {
            <Login />
            alert("Your token has expired, please login again!");
            console.log(error);
        });
    }

    render() {
        return (
            <div className="MyTable">
                <h2 className="Subtitle">The Data Table</h2>
                <table>
                <thead>
                    <tr>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Automatic</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.table.map(car => (
                    <tr key={car.id}>
                        <td>{car.BrandName}</td>
                        <td>{car.ModelName}</td>
                        <td>{car.Year}</td>
                        <td>{car.IsAutomatic}</td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        )
    };
};