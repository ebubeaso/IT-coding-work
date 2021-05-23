"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestToken = exports.AccessCode = exports.queryUrl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// this variable is what is going to receive the fetch API query results
var result = "";
exports.queryUrl = "";
const AccessCode = () => {
    // my state management variables
    var [clientId, setClientId] = react_1.useState("");
    var [secret, setSecret] = react_1.useState("");
    var [user, setUser] = react_1.useState("");
    var [passwd, setPasswd] = react_1.useState("");
    var [login, setLogin] = react_1.useState("");
    // this function makes the API query for the Bullhorn API authentication
    const getCode = () => {
        if (clientId == "" || secret == "" || user == "" || passwd == "") {
            alert("Please fill out the login form completely.");
            return;
        }
        console.log(clientId);
        let content = { clientID: clientId, clientSecret: secret, username: user, password: passwd };
        let link = "http://10.0.0.31:5555/authenticate";
        setLogin(false);
        fetch(link, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        }).then(response => {
            if (response.status !== 200) {
                alert("Please enter in valid credentials");
                return;
            }
            return response.json();
        }).then(data => {
            result = data;
            exports.queryUrl = result["restUrl"];
            console.log(exports.queryUrl);
            setLogin(true);
        }).catch(err => {
            alert(err);
            setLogin("");
        });
        return result;
    };
    if (login === "") {
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "Content" }, { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Login to Use Web App" }), void 0),
                jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "Authenticate below with your API credentials" }), void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "LoginDiv" }, { children: [jsx_runtime_1.jsxs("form", Object.assign({ className: "Login" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "clientID", className: "FormLabel" }, { children: "Client ID" }), void 0),
                                jsx_runtime_1.jsx("input", { type: "text", name: "clientID", id: "clientID", value: clientId, onChange: (e) => setClientId(e.target.value) }, void 0),
                                jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "clientSecret", className: "FormLabel" }, { children: "Client Secret" }), void 0),
                                jsx_runtime_1.jsx("input", { type: "text", name: "clienSecret", id: "clientSecret", value: secret, onChange: (e) => setSecret(e.target.value) }, void 0),
                                jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "username", className: "FormLabel" }, { children: "Username" }), void 0),
                                jsx_runtime_1.jsx("input", { type: "text", name: "username", id: "username", value: user, onChange: (e) => setUser(e.target.value) }, void 0),
                                jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "password", className: "FormLabel" }, { children: "Password" }), void 0),
                                jsx_runtime_1.jsx("input", { type: "password", name: "password", id: "password", value: passwd, onChange: (e) => setPasswd(e.target.value) }, void 0)] }), void 0),
                        jsx_runtime_1.jsx("button", Object.assign({ id: "submit-login", onClick: () => { setTimeout(getCode, 200); } }, { children: "Login" }), void 0)] }), void 0)] }), void 0));
    }
    return login ? jsx_runtime_1.jsx(exports.RestToken, {}, void 0) : jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Loading, please wait..." }), void 0);
};
exports.AccessCode = AccessCode;
const RestToken = () => {
    const authenticated = (jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "You can now use the search feature! Go to the Search page and use this Bullhorn Rest Token to prove you are authorized to run this web application." }), void 0));
    const notAuthenticated = (jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "Sorry, but the information that you entered was not correct. Please try again and login with the correct information." }), void 0));
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: "Content" }, { children: [(result["BhRestToken"]) ? jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Authentication Successful" }), void 0) : jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Authentication Failed" }), void 0),
            (result["BhRestToken"]) ? jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "Here is your Bullhorn Rest Token" }), void 0) : null, (result["BhRestToken"]) ? authenticated : notAuthenticated, jsx_runtime_1.jsxs("p", Object.assign({ className: "Paragraph" }, { children: ["Bullhorn RestToken: ", (result["BhRestToken"]) ? result["BhRestToken"] : null] }), void 0)] }), void 0));
};
exports.RestToken = RestToken;
