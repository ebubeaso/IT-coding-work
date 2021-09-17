"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const Form_1 = __importDefault(require("./Form"));
const Main = () => {
    return react_1.default.createElement(Form_1.default, null);
};
(0, react_dom_1.render)(react_1.default.createElement(Main, null), document.getElementById("root"));
