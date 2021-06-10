import React from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import {Main} from './App';
export const Header: React.FC = () => {
    let [drop, setDrop] = React.useState(false);
    const showDropDown = () => setDrop(true);
    const hideDropDown = () => setDrop(false);

    const dropDownData: JSX.Element = (
        <div className="Option">
            <Link to="/">Table A</Link>
            <Link to="/">Table B</Link>
            <Link to="/">Table C</Link>
        </div>
    )
    return (
        <HashRouter>
            <div>
            <header>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li className="TableDropDown">
                    Tables <i className="arrow down" onMouseOver={showDropDown}
                    onClick={hideDropDown}></i>
                </li>
                </ul>
            </nav>
            </header>
            <div>{drop ? dropDownData : null}</div></div>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route exact path="/table"></Route>
            </Switch>
        </HashRouter>
    )
}