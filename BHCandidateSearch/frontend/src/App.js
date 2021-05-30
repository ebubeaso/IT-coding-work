"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetweenDateSearch = exports.SingleDateSearch = exports.SearchPage = exports.Login = exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// this is where the main components will lie in
const react_1 = require("react");
const LoginPages_1 = require("./LoginPages");
const Home = () => {
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: "Content" }, { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Bullhorn Candidate Date Added Search" }), void 0),
            jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "The web app to search for candidates by date" }), void 0),
            jsx_runtime_1.jsx("br", {}, void 0),
            jsx_runtime_1.jsx("h2", Object.assign({ className: "Reason" }, { children: "Purpose of this web application" }), void 0),
            jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "This web application is used to interact with the Bullhorn REST API through a simple web interface. I know how daunting it is to write API calls to Bullhorn through API clients like Postman or even SOAPui, but writing what you are looking for on a web interface is so much easier!" }), void 0),
            jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "It has the simple functionality of searching for candidates that were added into your Bullhorn environment either on a specific date or between two different dates; the choice is yours!" }), void 0),
            jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "However, you will need to login first before you can use this, as it requires you to enter a Bullhorn REST token to use the date filtering feature. Click on \"Login\" on the navbar to get started!" }), void 0)] }), void 0));
};
exports.Home = Home;
const Login = () => {
    /*
    This component will handle the login. First, the user will have to enter in
    their login info (client ID, username, password)
     */
    return jsx_runtime_1.jsx(LoginPages_1.AccessCode, {}, void 0);
};
exports.Login = Login;
const SearchPage = () => {
    let [dateOption, setDateOption] = react_1.useState("");
    if (dateOption === "Single") {
        return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "The Date Added Search" }), void 0),
                jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "Click an option below to start searching for candidates" }), void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "SearchDiv" }, { children: [jsx_runtime_1.jsxs("form", Object.assign({ className: "DateSearch" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "date-option", className: "FormLabel" }, { children: "Date Option" }), void 0),
                                jsx_runtime_1.jsxs("select", Object.assign({ id: "date-option", name: "date-option", onChange: (e) => setDateOption(e.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "Select" }, { children: "- Select -" }), void 0),
                                        jsx_runtime_1.jsx("option", Object.assign({ value: "Single" }, { children: "Single Date" }), void 0),
                                        jsx_runtime_1.jsx("option", Object.assign({ value: "Between" }, { children: "Between Dates" }), void 0)] }), void 0),
                                jsx_runtime_1.jsx("br", {}, void 0)] }), void 0),
                        jsx_runtime_1.jsx(exports.SingleDateSearch, {}, void 0)] }), void 0)] }, void 0));
    }
    else if (dateOption === "Between") {
        return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "The Date Added Search" }), void 0),
                jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "Click an option below to start searching for candidates" }), void 0),
                jsx_runtime_1.jsxs("div", Object.assign({ className: "SearchDiv" }, { children: [jsx_runtime_1.jsxs("form", Object.assign({ className: "DateSearch" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "date-option", className: "FormLabel" }, { children: "Date Option" }), void 0),
                                jsx_runtime_1.jsxs("select", Object.assign({ id: "date-option", name: "date-option", onChange: (e) => setDateOption(e.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "Select" }, { children: "- Select -" }), void 0),
                                        jsx_runtime_1.jsx("option", Object.assign({ value: "Single" }, { children: "Single Date" }), void 0),
                                        jsx_runtime_1.jsx("option", Object.assign({ value: "Between" }, { children: "Between Dates" }), void 0)] }), void 0),
                                jsx_runtime_1.jsx("br", {}, void 0)] }), void 0),
                        jsx_runtime_1.jsx(exports.BetweenDateSearch, {}, void 0)] }), void 0)] }, void 0));
    }
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "The Date Added Search" }), void 0),
            jsx_runtime_1.jsx("h3", Object.assign({ className: "Subtitle" }, { children: "Click an option below to start searching for candidates" }), void 0),
            jsx_runtime_1.jsx("div", Object.assign({ className: "SearchDiv" }, { children: jsx_runtime_1.jsxs("form", Object.assign({ className: "DateSearch" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "date-option", className: "FormLabel" }, { children: "Date Option" }), void 0),
                        jsx_runtime_1.jsxs("select", Object.assign({ id: "date-option", name: "date-option", onChange: (e) => setDateOption(e.target.value) }, { children: [jsx_runtime_1.jsx("option", Object.assign({ value: "Select" }, { children: "- Select -" }), void 0),
                                jsx_runtime_1.jsx("option", Object.assign({ value: "Single" }, { children: "Single Date" }), void 0),
                                jsx_runtime_1.jsx("option", Object.assign({ value: "Between" }, { children: "Between Dates" }), void 0)] }), void 0),
                        jsx_runtime_1.jsx("br", {}, void 0)] }), void 0) }), void 0)] }, void 0));
};
exports.SearchPage = SearchPage;
const SingleDateSearch = () => {
    let [singleDate, setSingleDate] = react_1.useState("");
    let [restToken, setRestToken] = react_1.useState("");
    let [searchData, setSearchData] = react_1.useState([]);
    const singleSearch = () => {
        // check to see if you are using the correct Bullhorn rest token
        let userInput = { date: singleDate, url: LoginPages_1.queryUrl, token: restToken };
        fetch("http://10.0.0.31:5555/search/single", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInput)
        }).then(response => response.json())
            .then(data => {
            let result = data;
            setSearchData(result["data"]);
        }).catch(err => {
            console.log(err);
        });
        return;
    };
    let showTable = (jsx_runtime_1.jsxs("div", Object.assign({ className: "MyTable" }, { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Search Results" }), void 0),
            jsx_runtime_1.jsxs("table", { children: [jsx_runtime_1.jsx("thead", { children: jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("th", { children: "First Name" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Last Name" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Status" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Email Address" }, void 0)] }, void 0) }, void 0),
                    jsx_runtime_1.jsx("tbody", { children: searchData.map((search) => (jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("td", { children: search.firstName }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.lastName }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.status }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.email }, void 0)] }, search.id))) }, void 0)] }, void 0)] }), void 0));
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "DateDiv" }, { children: [jsx_runtime_1.jsxs("form", Object.assign({ className: "DateSearch" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "single-date", className: "FormLabel" }, { children: "Date" }), void 0),
                        jsx_runtime_1.jsx("input", { type: "date", id: "single-date", name: "single-date", value: singleDate, onChange: (e) => setSingleDate(e.target.value) }, void 0),
                        jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "token-single", className: "FormLabel" }, { children: "Bullhorn Rest Token" }), void 0),
                        jsx_runtime_1.jsx("input", { type: "text", id: "token-single", name: "token-single", value: restToken, onChange: (e) => setRestToken(e.target.value) }, void 0)] }), void 0),
                jsx_runtime_1.jsx("button", Object.assign({ id: "single-search", onClick: singleSearch }, { children: "Search" }), void 0), (searchData.length > 0) ? showTable : null] }), void 0) }, void 0));
};
exports.SingleDateSearch = SingleDateSearch;
const BetweenDateSearch = () => {
    let [betweenDate1, setBetweenDate1] = react_1.useState("");
    let [betweenDate2, setBetweenDate2] = react_1.useState("");
    let [restToken, setRestToken] = react_1.useState("");
    let [searchResult, setSearchResult] = react_1.useState([]);
    const betweenSearch = () => {
        // check to see if you are using the correct Bullhorn rest token
        let userInput = { date1: betweenDate1, date2: betweenDate2,
            url: LoginPages_1.queryUrl, token: restToken };
        fetch("http://10.0.0.31:5555/search/between", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userInput)
        }).then(response => response.json())
            .then(data => {
            let result = data;
            setSearchResult(result["data"]);
        }).catch(err => {
            console.log(err);
        });
        return;
    };
    let resultTable = (jsx_runtime_1.jsxs("div", Object.assign({ className: "MyTable" }, { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Search Results" }), void 0),
            jsx_runtime_1.jsxs("table", { children: [jsx_runtime_1.jsx("thead", { children: jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("th", { children: "First Name" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Last Name" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Status" }, void 0),
                                jsx_runtime_1.jsx("th", { children: "Email Address" }, void 0)] }, void 0) }, void 0),
                    jsx_runtime_1.jsx("tbody", { children: searchResult.map((search) => (jsx_runtime_1.jsxs("tr", { children: [jsx_runtime_1.jsx("td", { children: search.firstName }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.lastName }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.status }, void 0),
                                jsx_runtime_1.jsx("td", { children: search.email }, void 0)] }, search.id))) }, void 0)] }, void 0)] }), void 0));
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "DateDiv" }, { children: [jsx_runtime_1.jsxs("form", Object.assign({ className: "DateSearch" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "from-date", className: "FormLabel" }, { children: "From" }), void 0),
                        jsx_runtime_1.jsx("input", { type: "date", name: "from-date", id: "from-date", onChange: (e) => setBetweenDate1(e.target.value) }, void 0),
                        jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "to-date", className: "FormLabel" }, { children: "To" }), void 0),
                        jsx_runtime_1.jsx("input", { type: "date", name: "to-date", id: "to-date", onChange: (e) => setBetweenDate2(e.target.value) }, void 0),
                        jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "token-between", className: "FormLabel" }, { children: "Bullhorn Rest Token" }), void 0),
                        jsx_runtime_1.jsx("input", { type: "text", id: "token-between", name: "token-between", value: restToken, onChange: (e) => setRestToken(e.target.value) }, void 0),
                        jsx_runtime_1.jsx("br", {}, void 0)] }), void 0),
                jsx_runtime_1.jsx("button", Object.assign({ id: "single-search", onClick: betweenSearch }, { children: "Search" }), void 0), (searchResult.length > 0) ? resultTable : null] }), void 0) }, void 0));
};
exports.BetweenDateSearch = BetweenDateSearch;
