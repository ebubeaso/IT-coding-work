'use strict';
// this will make the Header class component for react
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { XboxGraph, Main, Phone } from "./Graph";

export class Header extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <header>
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/xbox">Xbox Usage</Link></li>
                    <li><Link to="/phone">Phone Usage</Link></li>
                </ul>
            </nav>
            </header>
            </div>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route path="/xbox"><XboxGraph/></Route>
                <Route path="/phone"><Phone/></Route>
            </Switch>
            </BrowserRouter>
        )
    }
};