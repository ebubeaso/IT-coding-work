"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const Header_1 = require("./Header");
const Main = () => {
    return jsx_runtime_1.jsx(Header_1.Header, {}, void 0);
};
exports.Main = Main;
react_dom_1.default.render(jsx_runtime_1.jsx(exports.Main, {}, void 0), document.getElementById("main"));
