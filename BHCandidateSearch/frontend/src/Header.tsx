import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Home, Login, SearchPage } from './App';

export const Header: React.FC = () => {
    return (
        <BrowserRouter>
        <div id="header-div">
        <header>
        <nav>
            <ul>
            <div id="nav1">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
            </div>
            <div id="nav2">
                <li><Link to="/login">Login</Link></li>
            </div>
            </ul>
        </nav>
        </header>
        </div>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/search"><SearchPage/></Route>
            <Route path="/login"><Login/></Route>
        </Switch>
        </BrowserRouter>
    )
}
