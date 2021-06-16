import React from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import {Main, Exotics} from './App';
import {TheHeader, Ul, NavList, sharedDisplay} from "./Styling"
//import ReactCSSTransitionGroup from 'react-transition-group';
export const Header: React.FC = () => {
    let [slide, setSlide] = React.useState<string>("None");
    var dropDownClass = `Option ${slide}`
    const showDropDown = () => {
        setSlide("SlideUp");
    };
    const hideDropDown = () => {
        setSlide("SlideDown");
    };

    const dropDownData: JSX.Element = (
        <div className={dropDownClass}>
            <Link to="/table/a">Exotics</Link>
            <Link to="/table/b">Table B</Link>
            <Link to="/table/c">Table C</Link>
        </div>
    )
    return (
        <HashRouter>
            <div>
            <TheHeader>
            <nav>
                <Ul>
                <NavList><Link to="/">Home</Link></NavList>
                <NavList className="TableDropDown">
                    Tables <i className="arrow down" onMouseOver={showDropDown}
                    onClick={hideDropDown}></i>
                </NavList>
                </Ul>
            </nav>
            </TheHeader>
            {dropDownData}
            </div>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route exact path="/table/a"><Exotics/></Route>
            </Switch>
        </HashRouter>
    )
}