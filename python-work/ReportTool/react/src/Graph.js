"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheGraph = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const App_1 = require("./App");
const recharts_1 = require("recharts");
const lodash_1 = __importDefault(require("lodash"));
// This is a custom setup for the x axis
const customXAxisTick = (props) => {
    const { x, y, payload } = props; // get the properties to apply to the component
    return (jsx_runtime_1.jsx("g", Object.assign({ transform: `translate(${x}, ${y})` }, { children: jsx_runtime_1.jsx("text", Object.assign({ x: 0, y: 0, dy: 10, textAnchor: "end", fill: "black", transform: "rotate(-35)" }, { children: payload.value }), void 0) }), void 0));
};
const TheGraph = () => {
    console.log("total points", App_1.totalPoints);
    var initData = [{ Time: "0", TheData: "0" }];
    var [graph, setGraph] = react_1.default.useState([...initData]);
    changeInterval(() => {
        let theData = lodash_1.default.cloneDeep(graph); // makes a deep clone of the data
        if (theData.length > App_1.totalPoints) {
            theData.shift();
        }
        theData.push(App_1.myData);
        setGraph(theData);
    }, App_1.timeInterval);
    /*
    The reason why we made our own custom hook is because we need to force the graph component to
    update with the new data to visualize. It takes in a callback function and a timer since the
    regular setInterval is not enough to get the data to dynamically update. Here is how the code works:
    - It initializes a mutable value as an initial value using "useRef" (which is nothing at the time)
    - It then uses two useEffect hooks: the first hook is used to save the callback function as the current
    object of reference, which will update every time the callback is called.
    - The second useEffect is what is used to run the callback function inside of a function, which will be
    run in a setInterval method, with the given delay attribute. Everytime the interval runs, it gets cleared
    so that the component can remount with the updated data without any issues (like memory leaks or unmounted
    React components)
     */
    function changeInterval(callback, delay) {
        const saved = react_1.default.useRef(); // save a reference
        // this remembers the latest function/state
        react_1.default.useEffect(() => {
            saved.current = callback;
        }, [callback]);
        // make the interval
        react_1.default.useEffect(() => {
            const ticking = () => {
                saved.current();
            };
            if (delay !== null) {
                let i = setInterval(ticking, delay);
                return () => clearInterval(i);
            }
        }, [delay]);
    }
    return (jsx_runtime_1.jsx("div", Object.assign({ className: "Linechart" }, { children: jsx_runtime_1.jsxs(recharts_1.LineChart, Object.assign({ width: 750, height: 600, data: graph }, { children: [jsx_runtime_1.jsx(recharts_1.XAxis, Object.assign({ dataKey: "Time", height: 50, tick: customXAxisTick }, { children: jsx_runtime_1.jsx(recharts_1.Label, { value: "Time", offset: 0, position: "insideBottomRight" }, void 0) }), void 0),
                jsx_runtime_1.jsx(recharts_1.YAxis, { label: { value: "Response Time (milliseconds)", angle: -90, position: "insideLeft" } }, void 0),
                jsx_runtime_1.jsx(recharts_1.Line, { type: "monotone", dataKey: "TheData", stroke: "black" }, void 0)] }), void 0) }), void 0));
};
exports.TheGraph = TheGraph;
