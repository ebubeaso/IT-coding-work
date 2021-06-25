'use strict';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import * as d3 from "d3";
import 'regenerator-runtime/runtime';
const margins = { "top": 20, "left": 20, "bottom": 20, "right": 20 };
// make the function component
export const XboxGraph = () => {
    // set up the useEffect hook
    useEffect(() => {
        fetch("http://192.168.1.103:9900/usage").then(response => { return response.json(); })
            .then(data => {
            let result = data;
            // set up d3 and the constants
            d3.select("p#xbox").append("svg").attr("width", 650).attr("height", 600)
                .style("padding", "20pt").style("border", "1px solid black");
            let svg = d3.select("svg");
            // the constants
            const width = parseInt(svg.attr("width"));
            const height = parseInt(svg.attr("height"));
            const graphWidth = width - margins.left - margins.right;
            const graphHeight = height - margins.top - margins.bottom;
            // Make the x and y scales and gridlines
            var xScale = d3.scaleBand()
                .domain(result.map(d => { return d.day; }))
                .range([margins.left * 2, graphWidth]).padding(0.5);
            let xGridlines = d3.axisBottom(xScale)
                .tickSize(-graphHeight).tickFormat(() => "");
            var yScale = d3.scaleLinear()
                .domain([0, d3.max(result, function (d) { return d.hours; })])
                .range([graphHeight, margins.top]);
            let yGridlines = d3.axisLeft(yScale)
                .tickSize(-graphWidth).tickFormat(() => "");
            // make the X gridlines
            svg.append("g").attr("class", "xGrid")
                .attr("transform", "translate(" + margins.left.toString() +
                ", " + graphHeight.toString() + ")")
                .attr("stroke", "darkgray")
                .call(xGridlines);
            // make the Y gridlines
            svg.append("g").attr("class", "yGrid")
                .attr("transform", "translate(" +
                (margins.left * 3).toString() + " ,0)")
                .attr("stroke", "darkgray")
                .call(yGridlines);
            // make the X and y axes
            svg.append("g").attr("class", "x-axis")
                .attr("transform", "translate(" + margins.left.toString() + ","
                + graphHeight.toString() + ")")
                .style("font-size", "10pt").call(d3.axisBottom(xScale));
            svg.append("g").attr("class", "y-axis")
                .attr("transform", "translate(" +
                (margins.left * 3).toString() + ", 0)")
                .call(d3.axisLeft(yScale));
            // make the axis labels
            // x-axis label
            svg.append("text").attr("class", "x-label").attr("text-anchor", "middle")
                .attr("x", width / 2).attr("y", (height - 2))
                .style("font-size", "12pt").text("Days of the Week");
            // y-axis label
            svg.append("text").attr("class", "y-label").attr("text-anchor", "middle")
                .attr("x", (0 - height / 2)).attr("y", margins.right)
                .attr("dy", "0.5em").style("font-size", "14pt")
                .attr("transform", "rotate(-90)").text("Hours Spent");
            // make the line
            var lineGenerator = d3.line()
                .x(function (d) {
                return xScale(d.day);
            })
                .y(function (d) {
                return yScale(d['hours']);
            }).curve(d3.curveMonotoneX);
            svg.append("path").datum(result)
                .attr("class", "line-plot").attr("fill", "none")
                .attr("stroke", "darkcyan")
                .attr("d", lineGenerator)
                .attr("transform", "translate(" + (margins.left * 2).toString() + ", 0)");
            // make circles to signify the data points
            svg.selectAll("circle").data(result)
                .join("circle").attr("r", 4).attr("fill", "black")
                .attr("cx", (d) => {
                return xScale(d.day);
            })
                .attr("cy", (d) => {
                return yScale(d.hours);
            }).attr("transform", "translate(" + (margins.left * 2).toString() + ", 0)");
        });
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", Object.assign({ className: "Title" }, { children: "Hours Spent on the Xbox" }), void 0),
            _jsx("p", { id: "xbox" }, void 0)] }, void 0));
};
// the phone graph
export const Phone = () => {
    useEffect(() => {
        fetch("http://192.168.1.103:9900/phone").then(response => { return response.json(); })
            .then(data => {
            let theData = data;
            console.log(theData);
            d3.select("p#phone").append("svg").attr("width", 650).attr("height", 600)
                .style("padding", "20pt").style("border", "1px solid black");
            let canvas = d3.select("svg");
            // set up the variables
            var phoneWidth = parseInt(canvas.attr("width"));
            var phoneHeight = parseInt(canvas.attr("height"));
            var chartWidth = phoneWidth - margins.left - margins.right;
            var chartHeight = phoneHeight - margins.top - margins.bottom;
            // set up the scales and grids
            let scaleX = d3.scaleBand().domain(theData.map(d => { return d.day; }))
                .range([margins.left, chartWidth]).padding(0.5);
            let xGrid = d3.axisBottom(scaleX).tickSize(-chartHeight).tickFormat(() => "");
            canvas.append("g").attr("class", "xGrid")
                .attr("transform", "translate(" + margins.left.toString() +
                "," + chartHeight.toString() + ")").attr("stroke", "darkgray").call(xGrid);
            let scaleY = d3.scaleLinear().domain([0, d3.max(theData, (d) => { return d.hours; })])
                .range([chartHeight, margins.top]);
            let yGrid = d3.axisLeft(scaleY).tickSize(-chartWidth).tickFormat(() => "");
            canvas.append("g").attr("class", "yGrid")
                .attr("transform", "translate(" + (margins.left * 2).toString() + " ,0)")
                .call(yGrid);
            // set up the axes
            canvas.append("g").attr("class", "x-axis")
                .attr("transform", "translate(" + margins.left.toString() + ","
                + chartHeight.toString() + ")")
                .style("font-size", "10pt").call(d3.axisBottom(scaleX));
            canvas.append("g").attr("class", "y-axis")
                .attr("transform", "translate(" + (margins.left * 2).toString() + ",0)")
                .style("font-size", "10pt").call(d3.axisLeft(scaleY));
            // make the axis labels
            // x-axis label
            canvas.append("text").attr("class", "x-label").attr("text-anchor", "middle")
                .attr("x", phoneWidth / 2).attr("y", (phoneHeight - 2))
                .style("font-size", "12pt").text("Days of the Week");
            // y-axis label
            canvas.append("text").attr("class", "y-label").attr("text-anchor", "middle")
                .attr("x", (0 - phoneHeight / 2)).attr("y", (margins.right / 2))
                .attr("dy", "0.2em").style("font-size", "14pt")
                .attr("transform", "rotate(-90)").text("Hours Spent");
            // make the line generator
            var lineGen = d3.line().x((d) => {
                return scaleX(d.day);
            }).y((d) => {
                return scaleY(d.hours);
            }).curve(d3.curveMonotoneX);
            // now to draw the line
            canvas.append("path").datum(theData)
                .attr("class", "line-plot").attr("fill", "none")
                .attr("stroke", "darkcyan").attr("d", lineGen)
                .attr("transform", "translate(" + (margins.left * 2).toString() + ", 0)");
            // make some circles as data points
            canvas.selectAll("circle").data(theData)
                .join("circle").attr("r", 4).attr("fill", "black")
                .attr("cx", (d) => {
                return scaleX(d.day);
            }).attr("cy", (d) => {
                return scaleY(d.hours);
            }).attr("transform", "translate(" + (margins.left * 2).toString() + " ,0)");
        });
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", Object.assign({ className: "Title" }, { children: "Hours Spent on the Phone" }), void 0),
            _jsx("p", { id: "phone" }, void 0)] }, void 0));
};
export const Main = () => {
    const Style = {
        textAlign: "center"
    };
    return (_jsxs("div", { children: [_jsx("h1", Object.assign({ className: "Title" }, { children: "Hello there sport!" }), void 0),
            _jsx("p", Object.assign({ style: Style }, { children: "This is the main page" }), void 0)] }, void 0));
};
