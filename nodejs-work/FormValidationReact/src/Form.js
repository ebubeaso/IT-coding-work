"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Form = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "Title" }, "Form Validation Practice"),
        react_1.default.createElement("p", { className: "Paragraph" }, "I am making this React page to get a better hang of doing form validation in my web applications. This is good for making signup forms or for getting specific information from the user and ensuring that the information provided from the client/user complies with what the signup form is looking for."),
        react_1.default.createElement("form", { className: "Form" },
            react_1.default.createElement("label", { htmlFor: "firstname", className: "FormLabel" }, "First Name"),
            react_1.default.createElement("label", { htmlFor: "lastname", className: "FormLabel" }, "Last Name"),
            react_1.default.createElement("label", { htmlFor: "username", className: "FormLabel" }, "Username"),
            react_1.default.createElement("label", { htmlFor: "password", className: "FormLabel" }, "Password"),
            react_1.default.createElement("label", { htmlFor: "confirm", className: "FormLabel" }, "Confirm Password"))));
};
exports.default = Form;
