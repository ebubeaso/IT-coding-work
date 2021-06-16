"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const Styling_1 = require("./Styling");
//import ReactCSSTransitionGroup from 'react-transition-group';
const Header = () => {
    let [slide, setSlide] = react_1.default.useState("None");
    var dropDownClass = `Option ${slide}`;
    const showDropDown = () => {
        setSlide("SlideUp");
    };
    const hideDropDown = () => {
        setSlide("SlideDown");
    };
    const dropDownData = (react_1.default.createElement("div", { className: dropDownClass },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/table/a" }, "Exotics"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/table/b" }, "Table B"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/table/c" }, "Table C")));
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(Styling_1.TheHeader, null,
                react_1.default.createElement("nav", null,
                    react_1.default.createElement(Styling_1.Ul, null,
                        react_1.default.createElement(Styling_1.NavList, null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                        react_1.default.createElement(Styling_1.NavList, { className: "TableDropDown" },
                            "Tables ",
                            react_1.default.createElement("i", { className: "arrow down", onMouseOver: showDropDown, onClick: hideDropDown }))))),
            dropDownData),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                react_1.default.createElement(App_1.Main, null)),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/table/a" },
                react_1.default.createElement(App_1.Exotics, null)))));
};
exports.Header = Header;
