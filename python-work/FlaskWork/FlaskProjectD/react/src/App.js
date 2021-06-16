"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exotics = exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const Styling_1 = require("./Styling");
const Main = () => {
    return react_1.default.createElement(Styling_1.Title, null, "Hello there sport!");
};
exports.Main = Main;
const Exotics = () => {
    return (react_1.default.createElement("div", { className: "Content" },
        react_1.default.createElement(Styling_1.Title, null, "I am the Exotics Table")));
};
exports.Exotics = Exotics;
