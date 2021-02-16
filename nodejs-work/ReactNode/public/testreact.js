// setup the myTable element
class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };
    componentDidMount() {
        fetch("http://localhost:8800/table", {
            method: "GET",
            mode: "cors",
            headers: {"Content-Type": "application/json"}
        }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            this.setState({data});
        })
        .then((err) => {console.log(err)});
    }
    render () {
        var { data } = this.state;
        return (
            <div>
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
                {data.map((car) => (
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
        );
    }
};

//render the HTML
ReactDOM.render(<MyTable />, document.getElementById("root"));