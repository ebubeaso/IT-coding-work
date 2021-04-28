'use strict';
import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from './header';
import ReactDOM from 'react-dom';
export const App = () => {
    return _jsx(Header, {}, void 0);
};
ReactDOM.render(_jsx(App, {}, void 0), document.getElementById("main"));
