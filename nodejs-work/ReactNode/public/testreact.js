// setup the myTable element
class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {d: []};
    };
    componentDidMount() {
        axios.get("http://localhost:8800/table")
            .then(response => {
                let data = response.data;
                this.setState({ data });
            });
    };
    render () {
        var { d } = this.state;
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
                {d.map((car) => (
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