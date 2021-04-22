'use strict';
import React from 'react';
import * as d3 from 'd3';
// I would need to import the fetch library for testing purposes
import fetch from 'node-fetch';
// this is where my D3 code will be going
export default class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state = {profanity: []}
    };
    componentDidMount() {
        this.addData();
    };

    // This function is what makes the bar graph
    addData() {
        fetch("http://10.0.0.192:9900/profanity")
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(data =>  {
                this.setState({profanity: data});
                const theData = this.state.profanity;
                d3.select("p.Graph").append("svg").attr("width", 600).attr("height", 600)
                        .style("padding", 20);
                let svg = d3.select("svg");
                // Set up some contstants
                const width = svg.attr("width");
                const height = svg.attr("height");
                const margins = { "top": 20, "left": 20, "bottom": 20, "right": 20 }
                const graphWidth = width - margins.left - margins.right;
                const graphHeight = height - margins.top - margins.bottom;
                
                // set the X scale and Y scale
                var xScale = d3.scaleBand()
                                .domain(theData.map(d => {return d.day}))
                                .range([margins.left*2, width]).padding(0.4);
                var yScale = d3.scaleLinear()
                                .domain([0, 700]).range([graphHeight, margins.top]);
                
                // X-axis
                svg.append("g").attr("class", "x-axis")
                            .attr("transform", "translate(" + margins.left + "," + (graphWidth) + ")")
                            .style("font-size", "10pt")
                            .call(d3.axisBottom(xScale));
                //add in the label for the X-Axis
                svg.append("text").attr("class", "x-label")
                    .attr("text-anchor", "middle")
                    .attr("x", width/2)
                    .attr("y", height - 4).text("Days of the week");
                
                // Y-axis
                svg.append("g")
                    .attr("transform", "translate(" + (margins.left*3) + "," + 0 + ")")
                    .style("font-size", "9pt")
                    .call(d3.axisLeft(yScale));
                //add in the label for the y-Axis
                svg.append("text").attr("class", "y-label")
                    .attr("text-anchor", "middle")
                    .attr("x", 0 - height/2)
                    .attr("y", 7)
                    .attr("dy", "0.5em")
                    .attr("transform", "rotate(-90)").text("Number Profanity Used");

                // set up the rectangles that show the data
                let rectangles = svg.append("g")
                    .attr("transform", "translate(" + margins.left + "," + 0 + ")");
                rectangles.selectAll("rect").data(theData)
                            .join("rect")
                                .attr("x", d => {return xScale(d.day);})
                                .attr("y", d => {return yScale(d.bad_words);})
                                .attr("width", xScale.bandwidth())
                                .attr("height", d => { return graphHeight - yScale(d.bad_words) })
                                .attr("fill", "darkcyan");
            })
            .catch(error => error);
    }    

    render() {  
        return (
            <div>
            <h1 data-testid="graph-title">Times My Wife Used Profanity in the Week</h1>
            <p className="Graph" id="graph"></p>
            </div>
        )
    };
}