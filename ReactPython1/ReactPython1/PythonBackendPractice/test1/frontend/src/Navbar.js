// this is the Navbar component
var Route = ReactRouterDOM.Route;
var Switch = ReactRouterDOM.Switch;
var Link = ReactRouterDOM.Link;
var BrowserRouter = ReactRouterDOM.BrowserRouter;
class Navbar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <header>
                <nav>
                    <div className="Menu1">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/table">Table</Link></li>
                    </ul>
                    </div>
                    <div className="Menu2">
                    <ul>
                        <li><Link to="/login">Login/Signup</Link></li>
                    </ul>
                    </div>
                </nav>
                </header>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/table"><GetTable /></Route>
                    <Route path="/login"><Login /></Route>
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}