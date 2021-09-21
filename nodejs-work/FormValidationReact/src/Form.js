"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const formValidator_1 = __importDefault(require("./formValidator"));
const Form = () => {
    // this is my custom react hook (validate = function to check form validity)
    const useForm = (validate) => {
        // set the initial state for the form
        var [theInputs, setInputs] = (0, react_1.useState)({
            firstname: "", lastname: "", username: "", password: "", confirm: ""
        });
        // set the initial state of the form error messages
        var [errors, setErrors] = (0, react_1.useState)({
            firstname: "", lastname: "", username: "", password: "", confirm: ""
        });
        // catch any changes happening on the form
        const changes = (e) => {
            // destructuring the name and value from e.target (looks cleaner)
            // this is the same as e.target.name and e.target.value
            var { name, value } = e.target; // The target element event
            setInputs({ ...theInputs, [name]: value });
        };
        // recognize the form submission (checks if the form is valid)
        const formSubmission = () => {
            setErrors(validate(theInputs));
            let valid = "";
            // gets the input values and puts them to an array
            let formInputs = Object.values(theInputs);
            // gets the form errors and puts them into an array
            let errorInputs = Object.values(errors);
            for (let val of errorInputs) {
                // looks for these error keywords in the errorInputs
                if (val.includes("Please") || val.includes("Password")) {
                    valid = false;
                }
            }
            if (formInputs.includes("") == false && theInputs.password == theInputs.confirm) {
                // double check password (for a capital letter, a number and for a special character)
                if (theInputs.password.length >= 8 && /[A-Z]/.test(theInputs.password) &&
                    /[\! || \? || \@ || \$ || \% || \*]/.test(theInputs.password)
                    && /\d/.test(theInputs.password)) {
                    valid = true;
                }
            }
            ;
            if (valid) {
                alert("Your form submittal was a success!!");
                window.location.reload();
            }
        };
        return { changes, theInputs, errors, formSubmission };
    };
    // pull in the custom hook below
    const { changes, theInputs, errors, formSubmission } = useForm(formValidator_1.default);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { className: "Title" }, "Form Validation Practice"),
        react_1.default.createElement("p", { className: "Paragraph" }, "I am making this React page to get a better hang of doing form validation in my web applications. This is good for making signup forms or for getting specific information from the user and ensuring that the information provided from the client/user complies with what the signup form is looking for."),
        react_1.default.createElement("div", { className: "FormDiv" },
            react_1.default.createElement("form", { className: "Form" },
                errors.firstname && react_1.default.createElement("p", { className: "Invalid" }, errors.firstname),
                react_1.default.createElement("label", { htmlFor: "firstname", className: "FormLabel" }, "First Name"),
                react_1.default.createElement("input", { id: "firstname", type: "text", name: "firstname", className: "FormInput", value: theInputs.firstname, onChange: changes }),
                errors.lastname && react_1.default.createElement("p", { className: "Invalid" }, errors.lastname),
                react_1.default.createElement("label", { htmlFor: "lastname", className: "FormLabel" }, "Last Name"),
                react_1.default.createElement("input", { id: "lastname", type: "text", name: "lastname", className: "FormInput", value: theInputs.lastname, onChange: changes }),
                errors.username && react_1.default.createElement("p", { className: "Invalid" }, errors.username),
                react_1.default.createElement("label", { htmlFor: "username", className: "FormLabel" }, "Username"),
                react_1.default.createElement("input", { id: "username", type: "text", name: "username", className: "FormInput", value: theInputs.username, onChange: changes }),
                errors.password && react_1.default.createElement("p", { className: "Invalid" }, errors.password),
                react_1.default.createElement("label", { htmlFor: "password", className: "FormLabel" }, "Password"),
                react_1.default.createElement("input", { id: "password", type: "password", name: "password", className: "FormInput", value: theInputs.password, onChange: changes }),
                errors.confirm && react_1.default.createElement("p", { className: "Invalid" }, errors.confirm),
                react_1.default.createElement("label", { htmlFor: "confirm", className: "FormLabel" }, "Confirm Password"),
                react_1.default.createElement("input", { id: "confirm", type: "password", name: "confirm", className: "FormInput", value: theInputs.confirm, onChange: changes })),
            react_1.default.createElement("button", { className: "SubmitButton", id: "submit", onClick: formSubmission }, "Register!"))));
};
exports.default = Form;
