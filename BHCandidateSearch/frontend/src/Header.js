"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const App_1 = require("./App");
const Header = () => {
    return (jsx_runtime_1.jsxs(react_router_dom_1.BrowserRouter, { children: [jsx_runtime_1.jsx("div", Object.assign({ id: "header-div" }, { children: jsx_runtime_1.jsx("header", { children: jsx_runtime_1.jsx("nav", { children: jsx_runtime_1.jsxs("ul", { children: [jsx_runtime_1.jsxs("div", Object.assign({ id: "nav1" }, { children: [jsx_runtime_1.jsx("li", { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: "Home" }), void 0) }, void 0),
                                        jsx_runtime_1.jsx("li", { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: "/search" }, { children: "Search" }), void 0) }, void 0)] }), void 0),
                                jsx_runtime_1.jsx("div", Object.assign({ id: "nav2" }, { children: jsx_runtime_1.jsx("li", { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: "Login" }), void 0) }, void 0) }), void 0)] }, void 0) }, void 0) }, void 0) }), void 0),
            jsx_runtime_1.jsxs(react_router_dom_1.Switch, { children: [jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ exact: true, path: "/" }, { children: jsx_runtime_1.jsx(App_1.Home, {}, void 0) }), void 0),
                    jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: "/search" }, { children: jsx_runtime_1.jsx(App_1.SearchPage, {}, void 0) }), void 0),
                    jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: "/login" }, { children: jsx_runtime_1.jsx(App_1.Login, {}, void 0) }), void 0)] }, void 0)] }, void 0));
};
exports.Header = Header;
