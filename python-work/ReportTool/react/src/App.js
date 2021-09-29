"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = exports.totalPoints = exports.timeInterval = exports.request = exports.myData = exports.dataArray = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const socket_io_client_1 = require("socket.io-client");
require("regenerator-runtime/runtime");
const Graph_1 = require("./Graph");
const endpoint = "http://localhost:5001";
exports.dataArray = [];
exports.myData = "";
exports.timeInterval = 0;
exports.totalPoints = 0;
const Main = () => {
    // ### Setting up my useState state management variables ###
    var [response, setResponse] = react_1.default.useState([]); // Websocket server response
    var [, setState] = react_1.default.useState();
    var [server, setServer] = react_1.default.useState(""); // get the server information
    // get the seconds interval and number of datapoints to hold
    var [seconds, setSeconds] = react_1.default.useState("10");
    var [dataPoints, setDataPoints] = react_1.default.useState("5");
    var [dataType, setDataType] = react_1.default.useState(""); // handle the data output (either ping or http)
    var [port, setPort] = react_1.default.useState("");
    var [form, setForm] = react_1.default.useState(false); // confirms whether or not to show the form
    // ### End of state management variables ###
    // the function for making a WebSocket connection
    const sendData = (seconds, points) => {
        exports.request = {};
        // Ternary operation to whether or not to include the port number
        (port.length > 0) ?
            exports.request = { Server: server, Report: dataType, TimeInterval: seconds, Points: points, Port: port } :
            exports.request = { Server: server, Report: dataType, TimeInterval: seconds, Points: points };
        exports.timeInterval = seconds * 1000;
        exports.totalPoints = points;
        const socket = socket_io_client_1.io(endpoint);
        //connect to the websocket server
        socket.connect();
        socket.on("connect", () => {
            socket.emit("connection", JSON.stringify(exports.request));
            socket.on("Call", (data) => {
                let result = data;
                exports.myData = JSON.parse(result);
                if (exports.dataArray.length > points) {
                    exports.dataArray.slice(0, 1);
                    setState({});
                }
                exports.dataArray.push(exports.myData);
                setState({});
                setResponse(result);
            });
            setInterval(() => {
                socket.emit("connection", JSON.stringify(exports.request));
            }, exports.timeInterval);
        });
    };
    const TheForm = (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Fill out the information below" }), void 0),
            jsx_runtime_1.jsxs("form", Object.assign({ className: "DataForm" }, { children: [jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "server_ip", id: "server_label" }, { children: "Server IP/Hostname" }), void 0),
                    jsx_runtime_1.jsx("input", { type: "text", id: "server_ip", name: "server_ip", value: server, onChange: (e) => setServer(e.target.value) }, void 0),
                    jsx_runtime_1.jsxs("div", Object.assign({ className: "MonitorOptions" }, { children: [jsx_runtime_1.jsx("input", { type: "radio", id: "ping", name: "data_type", value: "Ping", onClick: () => setDataType("Ping") }, void 0),
                            jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "ping" }, { children: "Ping" }), void 0),
                            jsx_runtime_1.jsx("input", { type: "radio", id: "http", name: "data_type", value: "HTTP", onClick: () => setDataType("HTTP") }, void 0),
                            jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "http" }, { children: "HTTP" }), void 0),
                            (dataType == "HTTP") ? jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "port", id: "port_label" }, { children: "Port Number" }), void 0) : null,
                            (dataType == "HTTP") ? jsx_runtime_1.jsx("input", { type: "text", name: "port", id: "port", value: port, onChange: (e) => setPort(e.target.value) }, void 0) : null] }), void 0),
                    jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "interval", id: "interval_label" }, { children: "Monitor Interval" }), void 0),
                    jsx_runtime_1.jsx("input", { type: "range", min: "10", max: "600", id: "interval", value: seconds, onChange: (e) => setSeconds(e.target.value), step: "10" }, void 0),
                    jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph", id: "interval-value" }, { children: (parseInt(seconds) >= 60) ? Math.floor((parseInt(seconds) / 60)).toString() + " minutes" :
                            seconds + " seconds" }), void 0),
                    jsx_runtime_1.jsx("label", Object.assign({ htmlFor: "points", id: "points_label" }, { children: "# of Data Points" }), void 0),
                    jsx_runtime_1.jsx("input", { type: "number", name: "points", min: "5", max: "50", id: "points", value: dataPoints, onChange: (e) => setDataPoints(e.target.value) }, void 0)] }), void 0),
            jsx_runtime_1.jsx("button", Object.assign({ className: "Submit", onClick: () => { sendData(parseInt(seconds), parseInt(dataPoints)); } }, { children: "Get Data" }), void 0),
            jsx_runtime_1.jsx("h1", Object.assign({ className: "Monitor" }, { children: (response.length > 0) ? `The ${dataType} response data` : null }), void 0),
            jsx_runtime_1.jsx("p", Object.assign({ className: "Monitor" }, { children: response }), void 0),
            (exports.dataArray.length > 0) ? jsx_runtime_1.jsx(Graph_1.TheGraph, {}, void 0) : null] }, void 0));
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs("div", Object.assign({ className: "Content" }, { children: [jsx_runtime_1.jsx("h1", Object.assign({ className: "Title" }, { children: "Infrastructure Reporting Tool" }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "This project is a custom reporting tool that I have made to better manage my personal cloud infrastructure but it can be used to monitor other servers as well." }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "Here is how it works: Click on the \"Create Report\" button to create a report. From there, you will provide the DNS name or the IP address of the server that you are trying to monitor. In addition, you will have the option to either monitor the server using Ping or through sending HTTP/HTTPS requests to test web endpoints as well." }), void 0),
                jsx_runtime_1.jsx("p", Object.assign({ className: "Paragraph" }, { children: "You can click on Reports to see any existing reports that you have already setup. This feature is in the works and will be added soon in a future update. If you have not yet done so already, click on \"Create Report\" to get started!" }), void 0),
                jsx_runtime_1.jsx("br", {}, void 0),
                jsx_runtime_1.jsx("button", Object.assign({ className: "Submit", onClick: () => setForm(true) }, { children: "Create Report" }), void 0), form ? TheForm : null] }), void 0) }, void 0));
};
exports.Main = Main;
