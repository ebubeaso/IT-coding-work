"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const Header = () => {
    let [drop, setDrop] = react_1.default.useState(false);
    const showDropDown = () => setDrop(true);
    const hideDropDown = () => setDrop(false);
    const dropDownData = (react_1.default.createElement("div", { className: "Option" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Table A"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Table B"),
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Table C")));
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("header", null,
                react_1.default.createElement("nav", null,
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null,
                            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                        react_1.default.createElement("li", { className: "TableDropDown" },
                            "Tables ",
                            react_1.default.createElement("i", { className: "arrow down", onMouseOver: showDropDown, onClick: hideDropDown }))))),
            react_1.default.createElement("div", null, drop ? dropDownData : null)),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                react_1.default.createElement(App_1.Main, null)),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/table" }))));
};
exports.Header = Header;
