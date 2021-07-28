
import React from 'react';
import { timeInterval,myData, totalPoints } from './App';
import { LineChart, Line, XAxis, YAxis, Label } from 'recharts';
import _ from "lodash";

// This is a custom setup for the x axis
const customXAxisTick: any = (props: any) => {
    const {x, y, payload} = props; // get the properties to apply to the component
    return (
        <g transform={`translate(${x}, ${y})`}>
            {/* This customizes the text of the x axis on the data table */}
            <text x={0} y={0} dy={10} textAnchor="end" fill="black" transform="rotate(-35)">
                {payload.value}
            </text>
        </g>
    )
}
export const TheGraph: React.FC = () => {
    console.log("total points", totalPoints);
    var initData: any = [{Time: "0", TheData: "0"}];
    var [graph, setGraph] = React.useState<Array<any> | any>([...initData]);
    changeInterval(()=> {
        let theData = _.cloneDeep(graph); // makes a deep clone of the data
        if (theData.length > totalPoints) {
            theData.shift();
        }
        theData.push(myData);
        setGraph(theData);
    }, timeInterval)
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
    function changeInterval(callback: any, delay: any) {
        const saved = React.useRef<any>(); // save a reference
        // this remembers the latest function/state
        React.useEffect(() => {
            saved.current = callback;
        }, [callback]);
        // make the interval
        React.useEffect(() => {
            const ticking = () => {
                saved.current();
            }
            if (delay !== null) {
                let i = setInterval(ticking, delay);
                return () => clearInterval(i)
            }
        }, [delay])
    }
    return (
        <div className="Linechart">
            <LineChart width={750} height={600} data={graph}>
                <XAxis dataKey="Time" height={50} tick={customXAxisTick}>
                    <Label value="Time" offset={0} position="insideBottomRight" />
                </XAxis>
                <YAxis label={{value: "Response Time (milliseconds)", angle: -90, position: "insideLeft"}} />
                <Line type="monotone" dataKey="TheData" stroke="black" />
            </LineChart>
        </div>
)}
