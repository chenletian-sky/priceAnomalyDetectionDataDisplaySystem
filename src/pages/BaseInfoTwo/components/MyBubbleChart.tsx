import React, {Component} from 'react';
import * as d3 from "d3"
import { Link } from 'react-router-dom';

// const data = d3.csvParse(await FileAttachment("./data/factors@7.csv").text(), ({id, value}) => ({name: id, title: id, value: +value}))
const data = require("../../../constants/data/testBubble.json")
interface MyBubbleChartProps {
    theme:any
}
interface MyBubbleChartState {

}
class MyBubbleChart extends Component <MyBubbleChartProps, MyBubbleChartState>{
    public constructor(props : MyBubbleChartProps) {
        super(props)
    }

    componentDidMount(){
        this.renderMyBubbleChart()
    }

    renderMyBubbleChart(){
        const height = 380
        const width = 240

        const pack = (data:any) => 
            d3.pack()
                .size([width -0.1, height -0.1])
                .padding(0.5)
            (d3.hierarchy({children: data})
                // @ts-ignore
                .sum(d => d.value))
        
        
        // @ts-ignore
        const root = pack(data)

        // console.log("hierarchy data",root)

        // const svg = d3.create("svg")
        //     .attr("viewBox", [5, 5, width, height])
        //     .attr("font-size", 1.1)
        //     .attr("font-family", "sans-serif")
        //     .attr("text-anchor", "middle");

        const svg = d3.select("#MyBubbleChart")
                        .append("svg")
                        .attr("height",height)
                        .attr("width",width)
                        .attr("transform","translate(40,0)")

        const leaf = svg.selectAll("g")
            .data(root.leaves())
            .join("g")
            // @ts-ignore
            .attr("transform", d => `translate(${d.x + 0.5},${d.y+ 0.1})`);

        leaf.append("circle")
            // @ts-ignore
            .attr("id", d => {
                // console.log("id",d)
                // @ts-ignore
                return d.data.id
            })
            // @ts-ignore
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.8)
            .attr("fill",'#cbd5e8')

            leaf.append("text")
            // @ts-ignore
            .attr("clip-path", d => d.clipUid)
            .selectAll("tspan")
            // @ts-ignore
            .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
            .join("tspan")
                .attr("x", -20)
                .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            // @ts-ignore
                .text(d => d);
    }

    public render() : JSX.Element {
        return (
            <div
                className='MyBubbleChart'
                id='MyBubbleChart'
                style={{...this.props.theme}}
            >
                <nav>   
                    <Link to="/">One</Link>
                </nav>
            </div>
       )
    }
}
export default MyBubbleChart;


