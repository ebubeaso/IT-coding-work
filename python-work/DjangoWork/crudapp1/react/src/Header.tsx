import React from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import {Main} from './App';
//import ReactCSSTransitionGroup from 'react-transition-group';
export const Header: React.FC = () => {
    let [drop, setDrop] = React.useState(false);
    let [slide, setSlide] = React.useState<string>("None");
    var dropDownClass = `Option ${slide}`
    const showDropDown = () => {
        setDrop(true);
        setSlide("SlideUp");
    };
    const hideDropDown = () => {
        setDrop(false)
        setSlide("SlideDown");
    };

    const dropDownData: JSX.Element = (
        <div className={dropDownClass}>
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
                <li className="TableDropDown" onMouseOver={showDropDown}>
                    Tables <i className="arrow down" onClick={hideDropDown}></i>
                </li>
                </ul>
            </nav>
            </header>
            {/* <div>{drop ? dropDownData : null}</div> */}
            {dropDownData}
            </div>
            <Switch>
                <Route exact path="/"><Main/></Route>
                <Route exact path="/table"></Route>
            </Switch>
        </HashRouter>
    )
}