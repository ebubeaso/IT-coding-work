"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
const Styling_1 = require("./Styling");
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Styling_1.Title, null, "Howdy")));
};
exports.App = App;
