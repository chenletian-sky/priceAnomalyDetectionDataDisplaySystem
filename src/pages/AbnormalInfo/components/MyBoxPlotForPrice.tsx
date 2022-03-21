import React, {Component} from 'react';
import * as d3 from "d3";
import * as d3_hexbin from "d3-hexbin"
import { Slider } from 'antd';
import { keys } from '../../../components/methods';

const data = require("../../../constants/data/boxPlotData.json")

interface MyBoxPlotForPriceProps {
  theme:any
}
interface MyBoxPlotForPriceState {
  sliderValue:number;
}
class MyBoxPlotForPrice extends Component <MyBoxPlotForPriceProps, MyBoxPlotForPriceState>{
    public constructor(props : MyBoxPlotForPriceProps) {
        super(props)
        this.state = {
          sliderValue:6
        }
    }

    handleSliderChange = (value:number) => {
      this.setState({
        sliderValue:value
      })
      this.renderMyBoxPlotForPrice()
    }

    componentDidMount() {
      this.renderMyBoxPlotForPrice()
    }

    renderMyBoxPlotForPrice(){
      // hexbinMatrix = (data, columns, width, height, padding, brushing = false, radiusSize) => {
      const {sliderValue} = this.state
      const height = (document.getElementById("MyBoxPlotForPrice") as HTMLElement).offsetHeight
      const width = (document.getElementById("MyBoxPlotForPrice") as HTMLElement).offsetWidth
      const padding = 30
      // const columns = ["sepalLength","sepalWidth","petalLength","petalWidth"]
      const columns = ["sepalLength","sepalWidth"]
      const size = (width - (columns.length + 1) * padding) / columns.length + padding
      const brushing = true
      d3.select("#svg_hexbinForPrice").remove()

      const svg = d3.select("#MyBoxPlotForPrice")
                    .append("svg")
                    .attr("id","svg_hexbinForPrice")
                    .attr("height",height)
                    .attr("width",width)
          .attr("viewBox", `${-padding} 0 ${width} ${width}`)
          .style("max-width", "100%")
          .style("height", "auto");
      // @ts-ignore
      const x = columns.map(c => d3.scaleLinear()
      // @ts-ignore
        .domain(d3.extent(data, d => d[c]))
        .rangeRound([padding / 2, size - padding / 2]))
      // @ts-ignore
      const y = x.map(x => x.copy().range([size - padding / 2, padding / 2]))
      
      function xAxis() {
        // @ts-ignore
        const axis = d3.axisBottom()
            .ticks(6)
            .tickSize(size * columns.length);
        // @ts-ignore
        d3.select(this).selectAll("g").data(x).enter().append("g")
            .attr("transform", (d, i) => `translate(${(columns.length - i - 1) * size},0)`)
            // @ts-ignore
            .each(function(d) { return d3.select(this).call(axis.scale(d)); })
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"));
      }
      
      svg.append("g")
          .attr("class", "x axis")
          .each(xAxis);
    
      function yAxis() {
        // @ts-ignore
        const axis = d3.axisLeft()
            .ticks(6)
            .tickSize(-size * columns.length);
        // @ts-ignore
        d3.select(this).selectAll("g").data(y).enter().append("g")
            .attr("transform", (d, i) => `translate(0,${i * size})`)
            .each(function(d:any) { return d3.select(this).call(axis.scale(d)); })
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"));
      }
    
      svg.append("g")
          .attr("class", "y axis")
          .each(yAxis);
    
      const cell = svg.append("g")
        .selectAll("g")
        .data(d3.cross(d3.range(columns.length), d3.range(columns.length)))
        .join("g")
          .attr("class", "cell")
          .attr("transform", ([i, j]) => `translate(${(columns.length - i - 1) * size},${j * size})`);
    
      cell.append("rect")
          .attr("fill", "none")
          .attr("stroke", "#aaa")
          .attr("x", padding / 2 + 0.5)
          .attr("y", padding / 2 + 0.5)
          .attr("width", size - padding) 
          .attr("height", size - padding);
    
      cell.each(function([i, j]) {

          const hex = 
          d3_hexbin.hexbin()
          // Hexbin()
              .x((d:any) => x[i](d[columns[i]]))
              .y((d:any) => y[j](d[columns[j]]))
              .radius(sliderValue)
              .extent([[0, 0], [size - padding, size - padding]])
    
          const bins = hex(data)
            
          const color = d3.scaleSequential(d3.interpolateViridis)
          // @ts-ignore    
          .domain([0, d3.max(bins, d => d.length) / 2])
              
          d3.select(this)
            .selectAll("path")
            // @ts-ignore
            .data(bins, d => `${d.x}-${d.y}`)
            .join("path")
            .attr("class", "hex")
            .attr("d", d => hex.hexagon())
            // @ts-ignore
            .attr("transform", d => `translate(${d.x},${d.y})`)
            // @ts-ignore
            .style("fill", d => color(d.length))
            // @ts-ignore
            .style("stroke", d => color(d.length))
            .style("Stroke-width", .5);
        
      });
    
      svg.append("g")
          .style("font", "bold 10px sans-serif")
        .selectAll("text")
        .data(columns)
        .join("text")
          .attr("transform", (d, i) => `translate(${(columns.length - i - 1) * size},${i * size})`)
          .attr("x", padding)
          .attr("y", padding)
          .attr("dy", ".71em")
          .text((d:any) => d);
      
      const brush = d3.brush()
          .on("start", brushstart)
          .on("brush", brushmove)
          .on("end", brushend)
          .extent([[0,0],[size,size]]);
      
      if(brushing) {
        // @ts-ignore
        cell.call(brush);
      }
      
      let brushCell: any 
    
      // Clear the previously-active brush, if any.
      // @ts-ignore
      function brushstart(p) {
        // @ts-ignore
        if (brushCell !== this) {
          d3.select(brushCell).call(brush.move, null);
          // @ts-ignore
          brushCell = this;
        }
      }
    
      // Highlight the selected circles.
      // @ts-ignore
      function brushmove(p) {
        // @ts-ignore
        var e = d3.brushSelection(this);   
        if(!e) {
          d3.selectAll(".hex").style("fill-opacity", 1)
        } else {
          
          const xScale = x[p[0]]
          const yScale = y[p[1]]
          // @ts-ignore
          const xRange = [xScale.invert(e[0][0]), xScale.invert(e[1][0])]
          // @ts-ignore
          const yRange = [yScale.invert(e[0][1]), yScale.invert(e[1][1])]
        
          const filteredData = data
          // @ts-ignore
              .filter(d => d[columns[p[0]]] >= xRange[0] 
                        & d[columns[p[0]]] <= xRange[1]
                        // @ts-ignore 
                        & d[columns[p[1]]] <= yRange[0]
                        // @ts-ignore
                        & d[columns[p[1]]] >= yRange[1]);
          
          cell.each(function([i, j]) {
            d3.selectAll(".hex")
              .style("fill-opacity", (d:any) => {
                const dem = d.length 
                // @ts-ignore
                const numerator = d.filter(e => 
                  // @ts-ignore
                          e[columns[p[0]]] >= xRange[0] 
                        & e[columns[p[0]]] <= xRange[1]
                        // @ts-ignore 
                        & e[columns[p[1]]] <= yRange[0]
                        // @ts-ignore
                        & e[columns[p[1]]] >= yRange[1]).length;
                return numerator / dem;
              })
          });
    
        }
    
      }
    
      // If the brush is empty, select all circles.
      function brushend() {
        // @ts-ignore
        var e = d3.brushSelection(this);
        if (e === null) d3.selectAll(".hex").style("fill-opacity", 1);
      } 
        
        // return svg.node();
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyBoxPlotForPrice'
              id='MyBoxPlotForPrice'
              style={{...this.props.theme}}
            > 
              {/* <input type="range" name="myRadius" id="myRadiusForTest" /> */}
              <Slider 
                max={10}
                min={1}
                step={1}
                defaultValue={6}
                onChange={this.handleSliderChange}
              ></Slider>

            </div>
       )
    }
}
export default MyBoxPlotForPrice;