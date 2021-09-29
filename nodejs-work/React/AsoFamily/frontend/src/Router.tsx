import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { Home, Ebube, Hailey, Pierre, Nyx, Damian, Jojo } from "./Pages";
// This file is for the client side routing for this application
const Router: React.FC = () => {
    return (
        <div>
        <HashRouter>
        <header>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ebube">Ebube</Link></li>
                <li><Link to="/hailey">Hailey</Link></li>
                <li><Link to="/pierre">Pierre</Link></li>
                <li><Link to="/nyx">Nyx</Link></li>
                <li><Link to="/jojo">Jojo</Link></li>
                <li><Link to="/damian">Damain</Link></li>
            </ul>            
            </nav>
        </header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ebube" component={Ebube} />
            <Route exact path="/hailey" component={Hailey}/>
            <Route exact path="/pierre" component={Pierre} />
            <Route exact path="/nyx" component={Nyx} />
            <Route exact path="/jojo" component={Jojo} />
            <Route exact path="/damian" component={Damian} />
            <Route component={NotFound} />
        </Switch>
        </HashRouter>
        </div>
    )
}
const NotFound: React.FC = () => {
    return <h1 className="Title">Sorry, this path does not exist</h1>
}
// export the router
export default Router;