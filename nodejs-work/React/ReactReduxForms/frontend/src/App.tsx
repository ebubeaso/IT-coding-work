import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { Home, Data, Login, Register } from './Pages';
// setup the client-side router
export const Header: React.FC = () => {
    return (
        <div>
        <HashRouter>
        <header>
            <nav>
             <ul>
                 <div className="Nav1">
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/data">Data</Link></li>
                 </div>
                <div className="Nav2">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </div>
            </ul>   
            </nav>
        </header>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/data" component={Data}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
        </HashRouter>
        </div>
    )
}