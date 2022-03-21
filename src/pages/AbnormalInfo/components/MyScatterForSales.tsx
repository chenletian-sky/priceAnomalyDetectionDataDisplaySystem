import React, {Component} from 'react';
import * as d3 from "d3"

const data = require("../../../constants/data/dataForTestScatter.json")

interface MyScatterForSalesProps {
  theme:any
}
interface MyScatterForSalesState {

}
class MyScatterForSales extends Component <MyScatterForSalesProps, MyScatterForSalesState>{
    public constructor(props : MyScatterForSalesProps) {
        super(props)
    }

    renderMyScatterForSales(){
      var width = (document.getElementById("MyScatterForSales") as HTMLElement).offsetWidth
      var height = (document.getElementById("MyScatterForSales") as HTMLElement).offsetHeight
      var margin = ({top: 10, right: 10, bottom: 20, left: 20})
      const xSelect = {title: "X-axis", 
            description: "Choose covariate",
            options: ['Cohabitation',
      'Cohabitation', 'Education', 'Unemployment'
      ]}
      const ySelect = {title: "Y-axis", 
              description: "Choose Cohabitation group",
              options: ["15-19 y/o","20-24 y/o",
        "25-29 y/o",
        "30-34 y/o",
        "35-39 y/o",
        "40-44 y/o",
        "45-49 y/o",
        "Combined_fertility"
        ]}
      // Making the svg
      const svg = d3.select("#MyScatterForSales").append("svg").attr("height",height).attr("width",width)
      // const svg = d3.select(DOM.svg(width,height))

      //// Functions for plotting ////

      // Define the div for the hover effect
      var div = d3.select("#MyScatterForSales").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);
        
      // xAxis functions 
      let xAxis = (g:any) => g
                .attr("transform", `translate(0,${height-margin.bottom})`)
                .call(d3.axisBottom(x))
                .call((g:any) => g.select(".domain").remove())
                .call((g:any) => g.append("text") // Adding axis label
                  .attr("x", width - margin.right)
                  .attr("y", -4)
                  .attr("fill", "#000")
                  .attr("font-weight", "bold")
                  .attr("font-size", 13)
                .attr("text-anchor", "end")
                .text("X-axis")
                )

      let x = d3.scaleLinear()
                // @ts-ignore
                .domain([0.9*d3.min(data, d => parseFloat(d["Cohabitation"])),1.05*d3.max(data, d => parseFloat(d["Cohabitation"]))]) 
                .range([margin.left,width-margin.right])

      // Y-axis functions
      let yAxis = (g:any) => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call((g:any) => g.select(".domain").remove())
                .call((g:any) => g.select(".tick:last-of-type text").clone() // Adding axis label 
                  .attr("x", 4)
                  .attr("text-anchor", "start")
                  .attr("font-weight", "bold")
                  .attr("font-size", 13)
                  .text("Y-axis"))  

      let y = d3.scaleLinear()
                // @ts-ignore
                .domain([0.95*d3.min(data, d => parseFloat(d["15-19 y/o"])),1.05*d3.max(data, d => parseFloat(d["15-19 y/o"]))])
                .range([height-margin.bottom,margin.top])

      //// Drawing map ////

      // let el = this;
      
      // If plot has changed do this: 
      // if (!el) {
      
      // Adding dots
      const dot = svg.append("g")
            .attr("fill", "steelblue")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .style('fill-opacity',.5)
          .selectAll("g")
          .data(data)
          .join("circle")
          // @ts-ignore
            .attr("transform", d => `translate(${x(d["Cohabitation"])},${y(d["15-19 y/o"])})`)
            .attr("r", d => 10)
        
        // Mouseover function high lighting point with red
        .on('mouseover', function (d, i) {
            d3.select(this).transition()

              .duration(50)
              .attr('opacity', '.85')
              .attr("stroke", "red")
              .attr('fill','red');

            // Shows the tooltip
            div.transition()
              .duration(50)
              .style("opacity", .9);
          
            // Writes the municipality name in the tooltip
            div.html(d.Municipality)
            // @ts-ignore
              .style("left", (event,d) => (event.pCohabitationX) + "px")
            // @ts-ignore
              .style("top", (event,d) => (event.pCohabitationY) + "px")
          })
      
          // Setting things back to normal after tool tip
          .on('mouseout', function (d, i) {
            d3.select(this).transition()
              .duration(50)
              .attr('opacity', '1')
              .attr('stroke','steelblue')
              .attr('fill','steelblue');
          
            // Deletes the tool tip (i.e just makes it invisible)...
            div.transition()
              .duration(50)
              .style("opacity", 0);
          });
        
        // Adding axes to plot
        svg.append('g')
          .call(xAxis);
        
        svg.append('g')
          .call(yAxis);
        // @ts-ignore
        // el = svg.node()
      
      // } 
      // else {  
        
      // //// Updating scatterplot when things change ////
        
      //   let tmp = d3.select(this);
        
      //   // Removes the text on the axes
      //   tmp.selectAll("text")
      //       .transition()
      //       .duration(1000)
      //       .style('opacity', 0)
      //       .remove();
        
      //     // Removes the ticklines on the axes
      //     tmp.selectAll(".tick line").remove();
        
      //   // Moving the circles
      //   d3.selectAll("circle")
      //     .data(data)
      //     .join("circle")
      //       .transition()
      //       .duration(1000)
      //       // @ts-ignore
      //       .attr("transform", d => `translate(${x(d[xSelect])},${y(d[ySelect])})`)
      //       .attr("r", d => 10)
        
      //   tmp.append('g')
      //     .call(xAxis);
        
      //   tmp.append('g')
      //     .call(yAxis);
      //   // @ts-ignore
      //   el = tmp.node()
        
        
      // }
          
      
    }

    componentDidMount(){
      this.renderMyScatterForSales()
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyScatterForSales'
              id='MyScatterForSales'
              style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyScatterForSales;