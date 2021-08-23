"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Main = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("section", { className: "Section1" },
            react_1.default.createElement("h1", { className: "Title" }, "This is a very curvy page"),
            react_1.default.createElement("div", { className: "Wave1" },
                react_1.default.createElement("svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
                    react_1.default.createElement("path", { d: "M985.66,92.83C906.67,72,823.78,31,\n                    743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,\n                    31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,\n                    118.92,1055.71,111.31,985.66,92.83Z", className: "ShapeFill" })))),
        react_1.default.createElement("section", { className: "Section2" },
            react_1.default.createElement("h1", { className: "Title" }, "This is also another curvy section"),
            react_1.default.createElement("div", { className: "Wave1" },
                react_1.default.createElement("svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
                    react_1.default.createElement("path", { d: "M985.66,92.83C906.67,72,823.78,31,\n                    743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,\n                    31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,\n                    118.92,1055.71,111.31,985.66,92.83Z", className: "ShapeFill" }))))));
};
react_dom_1.default.render(react_1.default.createElement(Main, null), document.getElementById("root"));
