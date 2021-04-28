'use strict';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// this will make the Header class component for react
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { XboxGraph, Main, Phone } from "./Graph";
export class Header extends React.Component {
    render() {
        return (_jsxs(BrowserRouter, { children: [_jsx("div", { children: _jsx("header", { children: _jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Main" }), void 0) }, void 0),
                                    _jsx("li", { children: _jsx(Link, Object.assign({ to: "/xbox" }, { children: "Xbox Usage" }), void 0) }, void 0),
                                    _jsx("li", { children: _jsx(Link, Object.assign({ to: "/phone" }, { children: "Phone Usage" }), void 0) }, void 0)] }, void 0) }, void 0) }, void 0) }, void 0),
                _jsxs(Switch, { children: [_jsx(Route, Object.assign({ exact: true, path: "/" }, { children: _jsx(Main, {}, void 0) }), void 0),
                        _jsx(Route, Object.assign({ path: "/xbox" }, { children: _jsx(XboxGraph, {}, void 0) }), void 0),
                        _jsx(Route, Object.assign({ path: "/phone" }, { children: _jsx(Phone, {}, void 0) }), void 0)] }, void 0)] }, void 0));
    }
}
;
