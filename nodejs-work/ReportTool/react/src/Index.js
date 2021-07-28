"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = require("./App");
const App = () => {
    return jsx_runtime_1.jsx(App_1.Main, {}, void 0);
};
exports.App = App;
react_dom_1.default.render(jsx_runtime_1.jsx(exports.App, {}, void 0), document.getElementById("main"));
