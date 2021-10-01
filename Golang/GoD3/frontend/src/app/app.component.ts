// This is the main component
import { Component, OnInit } from "@angular/core";
import axios from "axios";
import * as d3 from 'd3';
// root componenet
@Component({
    selector: "app-root",
    template: `
    <header></header>
    <router-outlet></router-outlet>
    `,
    styles: [],
})
export class App {}

// the graph component
@Component({
    template: `
        <h1 class="title">Car Type Preferences Graph</h1>
        <p id="graph"></p>
        <br/>
    `,
    styles: [],
})
export class GraphComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {
        axios.get("http://shadowblaze.aso.net:9900/cars", 
        {headers: {"Content-Type": "application/json"}})
            .then(response => {
                let result: any[] = response.data;
                console.log(result)
                // add the svg
                let canvas = d3.select("#graph")
                canvas.append("svg")
                .attr("width", "90%").attr("height", "100%")
                .style("padding", 25).style("border", "2px solid black")
                const drawGraph = (data: any[]) => {
                    let svg = d3.select("svg");
                    // setup the constants (width and height; margins)
                    // we get the width and height from the style of the svg, remove the "px" letters
                    // and turn them into integers to use for the graph widths and heights
                    let width = svg.style("width");
                    let height = svg.style("height");
                    let svgWidth = parseInt( width.substr(0, (width.length - 2)) );
                    let svgHeight = parseInt( height.substr(0, (height.length - 2)) ); 
                    const margins: number = 20;
                    const graphWidth =  svgWidth - (margins*2);
                    const graphHeight = svgHeight - (margins*2);
                    console.log(`"Width and height: ", ${graphWidth}, ${graphHeight}`)
                    // setup the scales (x and y)
                    var xScale = d3.scaleBand().domain(result.map(d => {return d.CarType}))
                        .range([(margins*2), (graphWidth)])
                    // I added the margins in the yScale for better spacing of data
                    var yScale = d3.scaleLinear().domain(
                        [0, (d3.max(result.map(d => d.Likes)) + margins)]
                    ).range([graphHeight, margins])
                    // setup the axes (x and y)
                    // x axis
                    svg.append("g").attr("class", "x-axis").style("font-size", "10pt")
                        .attr("transform", `translate(${margins}, ${graphHeight-(margins/2)})`)
                        .call(d3.axisBottom(xScale));
                    // y axis
                    svg.append("g").attr("class", "y-axis").style("font-size", "10pt")
                        .attr("transform", `translate(${margins*3}, -${margins/2})`)
                        .call(d3.axisLeft(yScale))
                    // setup the labels (x and y)
                    // x-label
                    svg.append("text").attr("class", "x-label").attr("text-anchor", "middle")
                        .attr( "x", svgWidth/2 ).attr( "y", svgHeight-(margins/5) ).text("Vehicle Types")
                        .style("font-size", "11pt")
                    // y-label
                    svg.append("text").attr("class", "y-label").attr("text-anchor", "middle")
                        .attr("transform", "rotate(-90)").attr("x", `-${svgHeight/2}`)
                        .attr("y", (margins/2)).text("# of People who Like Them (Thousands)")
                    // setup the rectangles
                    let rectangles = svg.append("g")
                        .attr("transform", `translate(${graphHeight/9}, -${margins/2})`)
                    // making a color scale for the rectangles
                    var colorScale = d3.scaleOrdinal().domain(result.map(d => d.CarType))
                        .range(["red", "gold", "black", "purple", "orange", "darkcyan", "green", "blue"])
                    rectangles.selectAll("rect").data(result)
                        .join("rect").attr("x", (d):any => {return xScale(d.CarType)})
                        .attr("y", (d):any => {return yScale(0)})
                        .attr("width", (xScale.bandwidth()/2))
                        .attr("height", (d):any => {return graphHeight - yScale(0)})
                        .attr("fill", (d):any => colorScale(d))
                    // add animation
                    svg.selectAll("rect").transition().duration(1000)
                        .attr("y", (d:any):any => {return yScale(d.Likes)})
                        .attr("height", (d:any):any => {return graphHeight - yScale(d.Likes)})
                        .delay((d, i):any => {return i * 100})
                }
                // run the draw graph function
                drawGraph(result)
                // update it each time the window is resized
                window.addEventListener("resize", () => {
                    let svg = d3.select("svg");
                    svg.selectAll("*").remove(); drawGraph(result)
                })
            }).catch(err => console.error(err));
    }
}