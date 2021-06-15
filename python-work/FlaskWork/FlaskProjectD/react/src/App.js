"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tables = exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const Main = () => {
    return react_1.default.createElement("h1", null, "Hello there sport!");
};
exports.Main = Main;
const Tables = () => {
    return (react_1.default.createElement("div", { className: "Content" },
        react_1.default.createElement("h1", { className: "Title" }, "Main Table")));
};
exports.Tables = Tables;
