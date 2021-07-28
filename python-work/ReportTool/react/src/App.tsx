import React from 'react';
import {io} from "socket.io-client";
import 'regenerator-runtime/runtime';
import { TheGraph } from './Graph';
const endpoint = "http://localhost:5000";
export var dataArray: Array<any> | any[] = [];
export var myData: any = "";
export var request: any;
export var timeInterval = 0;
export var totalPoints: number = 0;
export const Main: React.FC = () =>  {
// ### Setting up my useState state management variables ###
    var [response, setResponse] = React.useState<string[] | any[]>([]); // Websocket server response
    var [,setState] = React.useState<any>();
    var [server, setServer] = React.useState<string>(""); // get the server information
    // get the seconds interval and number of datapoints to hold
    var [seconds, setSeconds] = React.useState<string>("10");
    var [dataPoints, setDataPoints] = React.useState<string>("5");
    var [dataType, setDataType] = React.useState<string>(""); // handle the data output (either ping or http)
    var [port, setPort] = React.useState<string>("");
    var [form, setForm] = React.useState(false); // confirms whether or not to show the form
// ### End of state management variables ###
    // the function for making a WebSocket connection
    const sendData = (seconds: number, points: number) => {
        request = {};
        // Ternary operation to whether or not to include the port number
        (port.length > 0) ? 
        request = {Server: server, Report: dataType, TimeInterval: seconds, Points: points, Port: port} : 
        request = {Server: server, Report: dataType, TimeInterval: seconds, Points: points};
        timeInterval = seconds * 1000;
        totalPoints = points;
        const socket = io(endpoint);
        //connect to the websocket server
        socket.connect();
        socket.on("connect", () => {
            socket.emit("connection", JSON.stringify(request));
            socket.on("Call", (data: any) => {
                let result = data;
                myData = JSON.parse(result);
                if (dataArray.length > points) {
                    dataArray.slice(0, 1);
                    setState({});
                }
                dataArray.push( myData );
                setState({});
                setResponse(result);
            })
            setInterval(() => {
                socket.emit("connection", JSON.stringify(request));
            }, timeInterval)
        })
    }
    const TheForm: JSX.Element = (
        <div>
            <h1 className="Title">Fill out the information below</h1>
            <form className="DataForm">
                <label htmlFor="server_ip" id="server_label">Server IP/Hostname</label>
                <input type="text" id="server_ip" name="server_ip" value={server} 
                    onChange={(e) => setServer(e.target.value)} />
                <div className="MonitorOptions">
                    <input type="radio" id="ping" name="data_type" value="Ping" 
                        onClick={() => setDataType("Ping")} />
                    <label htmlFor="ping">Ping</label>
                    <input type="radio" id="http" name="data_type" value="HTTP" 
                        onClick={() => setDataType("HTTP")} />
                    <label htmlFor="http">HTTP</label>
                    {/* These conditionals are only for HTTP requests to have a port number*/}
                    {(dataType == "HTTP")? <label htmlFor="port" id="port_label">Port Number</label> : null}
                    {(dataType == "HTTP")? <input type="text" name="port" id="port" 
                        value={port} onChange={(e) => setPort(e.target.value)} /> : null}
                    {/* End of HTTP port conditional section */}
                </div>
                <label htmlFor="interval" id="interval_label">Monitor Interval</label>
                <input type="range" min="10" max="600" id="interval" value={seconds} 
                    onChange={(e) => setSeconds(e.target.value)} step="10" />
                    <p className="Paragraph" id="interval-value">
                        {/* if seconds is greater/equal to 60, convert to minutes, else leave as seconds */}
                        {(parseInt(seconds) >= 60) ? Math.floor((parseInt(seconds)/60)).toString() + " minutes" : 
                        seconds + " seconds"}
                    </p>
                <label htmlFor="points" id="points_label"># of Data Points</label>
                <input type="number" name="points" min="5" max="50" id="points" value={dataPoints}
                onChange={(e) => setDataPoints(e.target.value)} />
            </form>
            <button className="Submit" 
                onClick={() => {sendData(parseInt(seconds), parseInt(dataPoints))}}>Get Data</button>
            <h1 className="Monitor">{(response.length > 0) ? `The ${dataType} response data`: null}</h1>
            <p className="Monitor">{response}</p>
            {(dataArray.length > 0) ? <TheGraph/> : null}
        </div>
    )
    return (
        <div>
            <div className="Content">
                <h1 className="Title">Infrastructure Reporting Tool</h1>
                <p className="Paragraph">
                    This project is a custom reporting tool that I have made to better
                    manage my personal cloud infrastructure but it can be used to monitor
                    other servers as well.
                </p>
                <p className="Paragraph">
                    Here is how it works:
                    Click on the "Create Report" button to create a report. From there, you will 
                    provide the DNS name or the IP address of the server that you are trying to
                    monitor. In addition, you will have the option to either monitor the server 
                    using Ping or through sending HTTP/HTTPS requests to test web endpoints as well.
                </p>
                <p className="Paragraph">
                    You can click on Reports to see any existing reports that you have already setup.
                    This feature is in the works and will be added soon in a future update.
                    If you have not yet done so already, click on "Create Report" to get started!
                </p>
                <br/>
                <button className="Submit" onClick={() => setForm(true)}>Create Report</button>
                {form ? TheForm : null}
            </div>
        </div>
    )
}