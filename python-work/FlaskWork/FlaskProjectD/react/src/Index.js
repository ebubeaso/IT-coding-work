"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(require("react-dom"));
const Header_1 = require("./Header");
const react_1 = __importDefault(require("react"));
react_dom_1.default.render(react_1.default.createElement(Header_1.Header, null), document.getElementById("main"));
