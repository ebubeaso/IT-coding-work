class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1 class="title">I am using ReactJS</h1>
                <p>This is going to be pretty interesting to render</p>
            </div>
        );
    }
}
ReactDOM.render(<Welcome />, document.getElementById("home"));