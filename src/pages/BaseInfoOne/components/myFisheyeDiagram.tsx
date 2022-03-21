import React, {Component} from 'react';
import * as d3 from "d3";

import { Link } from 'react-router-dom';
// redux相关

import { connect } from 'react-redux';
import { updateSomethingTempt } from '../../../action';
import MyHeader from '../../../components/MyHeader';
import { MainStoreType, StoreType } from '../../../types/propsTypes';
import MyFrame from '../../../components/MyFrame';


// const data = require("./zoomableEnclosure/data.json")
const data = require("../../../constants/data/fishEyeDiagram.json")
// const rawData = require("./data/filter_try_data.json")
// const data = rawData[0]

interface MyFisheyeDiagramProps{
    theme?:any;
    // test push
    Main:MainStoreType,
    updateSomethingTempt:typeof updateSomethingTempt
}
interface MyFisheyeDiagramState {
    height: number,
    width: number
}
class MyFisheyeDiagram extends Component <MyFisheyeDiagramProps, MyFisheyeDiagramState>{
    public constructor(props : MyFisheyeDiagramProps) {
        super(props)
        this.state = {
            height: 400,
            width: 400
        }
    }

    componentDidMount(){
        // const tree = (data:any) => {
        //     const root = d3.hierarchy(data)
        //         .sort((a, b) => b.height - a.height
        //             || a.data.name.localeCompare(b.data.name));
        //     // @ts-ignore
        //     root.dx = 10;
        //     // @ts-ignore
        //     root.dy = width / (root.height + 2);
        //     return d3.cluster()
        //     // @ts-ignore
        //         .nodeSize([root.dx, root.dy])
        //       (root);
        //   }
        // const rawData = this.props.Main.data
        // const root = d3.hierarchy(rawData["文化玩乐"])
        // const myRoot = d3.hierarchy(rawData["文化玩乐"])
        // console.log("root fish eye",myRoot)



        this.renderZoomableEnclosure()
        // console.log("fisheyeDiagram",this.props.Main.data)
        // console.log("innerHeight innerWidth",(document.getElementById("zoomableEnclosure") as HTMLElement).getAttribute("height"))
    }

    // renderZoomableEnclosure(){
    //     /* ----------------------------配置参数------------------------  */
    //     const chart = new Chart();
    //     const config = {
    //         margins: {top: 80, left: 80, bottom: 50, right: 80},
    //         textColor: 'black',
    //         title: '测试用可缩放鱼眼图',
    //         hoverColor: 'white',
    //         animateDuration: 1000
    //     }
    
    //     chart.margins(config.margins);
    
    //     /* ----------------------------数据转换------------------------  */
    //     const root = d3.hierarchy(data)
    //                     .sum((d:any) => d.house)
    //                     .sort((a:any,b:any) => a.value - b.value);
    
    //     const pack = d3.pack()
    //                     .size([chart.getBodyWidth(), chart.getBodyHeight()])
    
    //     pack(root);
    
    //     let focusCircle = root;
    //     let prevView: d3.ZoomView;
    
    //     /* ----------------------------渲染圆圈------------------------  */
    //     let groups;
    //     chart.renderCircle = function(){
    //         groups = chart.body().selectAll('.g')
    //                                     .data(root.descendants().slice(1));
    
    //         groups.enter()
    //                 .append('g')
    //                 .attr('class', (d: any, i: string) => 'g g-' + i)
    //                 .attr('transform', () => 'translate(' + chart.getBodyWidth()/2 + ',' + chart.getBodyHeight()/2 + ')')
    //                 .append('circle')
    //                 .attr('class', 'circle')
    //             .merge(groups.selectAll('.circle'))
    //                 .attr('fill', (d: { depth: number; }) => chart._colors(d.depth % 10));
    
    //         groups.exit()
    //                 .selectAll('.circle')
    //                 .transition().duration(config.animateDuration)
    //                 .attr('r', 0)
    //                 .remove();
    //     }
    
    //     /* ----------------------------渲染文本标签------------------------  */
    //     chart.renderText = function(){
    
    //         const texts = chart.body().selectAll('.text')
    //                                     .data(root.descendants());
    
    //             texts.enter()
    //                     .append('text')
    //                     .attr('class', 'text')
    //                 .merge(texts)
    //                     .text((d: { data: { name: any; }; }) => d.data.name)
    //                     .attr('stroke', config.textColor)
    //                     .attr('fill', config.textColor)
    //                     .attr('text-anchor', 'middle')
    //                     .text( function(d:any){
    //                         if (d.children) return;
    //                         // @ts-ignore
    //                         if (textWidthIsOk(d, this)){
    //                             return d.data.name;
    //                         }else{
    //                             return d.data.name.slice(0,3);
    //                         }
    //                       })
    
    //         // 检测文本长度是否合适
    //         function textWidthIsOk(d: any, text:any){
    //             const textWidth = text.getBBox().width;
    //             if (d.r*2 >= textWidth) return true;
    //             return false;
    //             // console.log("text",text,d)
    //             // return true
    //         }
    
    //     }
    
    //     /* ----------------------------渲染图标题------------------------  */
    //     chart.renderTitle = function(){
    //         chart.svg().append('text')
    //                 .classed('title', true)
    //                 .attr('x', (chart.width() as number)/2 )
    //                 .attr('y', 0)
    //                 .attr('dy', '2em')
    //                 .text(config.title)
    //                 .attr('fill', config.textColor)
    //                 .attr('text-anchor', 'middle')
    //                 .attr('stroke', config.textColor);
    
    //     }
    
    //     /* ----------------------------绑定鼠标交互事件------------------------  */
    //     chart.addMouseOn = function(){
    
    //         d3.selectAll('.g circle')
    //             .on('mouseover', function(event){
    //                 // const e = d3.event;
    //                 const e = event
    //                 e.target.style.cursor = 'hand'
    
    //                 d3.select(e.target)
    //                     .attr('stroke', config.hoverColor);
    
    //             })
    //             .on('mouseleave', function(event,d){
    //                 // const e = d3.event;
    //                 const e = event
    //                 d3.select(e.target)
    //                     .attr('stroke', null);
    //             })
    //             .on('click', function(event,d){
    //                 if (focusCircle !== d){
    //                     zoom(d as any);
    
    //                     event.stopPropagation();
    //                 }
    //             });
    
    //         chart.svg()
    //                 .style("cursor", "poniter")
    //                 .on("click", () => zoom(root));
    
    //         function zoom(d: d3.HierarchyNode<any>){
    //             focusCircle = d ;
    
    //             chart.svg()
    //                     .transition()
    //                     .duration(config.animateDuration)
    //                     .tween("zoom", (d: any) => {
    //                         // @ts-ignore
    //                         const i = d3.interpolateZoom(prevView, [(focusCircle as d3.HierarchyNode<any>).x, focusCircle.y, focusCircle.r * 2]);
    //                         return (t: number) => zoomTo(i(t));
    //                     });
    //         }
    
    //         function zoomTo(v: any[]){
    //             const k = chart.getBodyHeight() / v[2];
    
    //             prevView = v as any;
    
    //             d3.selectAll("circle")
    //                 .attr("transform", (d) => {
    //                     return `translate(${((d as any).x - v[0]) * k},${((d as any).y - v[1]) * k})`;
    //                 })
    //                 .attr("r", (d) => (d as any).r * k);
    
    //             d3.selectAll(".text")
    //                 .attr("transform", (d) => {
    //                     return `translate(${((d as any).x - v[0]) * k + chart.getBodyWidth()/2},${((d as any).y - v[1]) * k  + chart.getBodyHeight()/2}) scale(${k})`;
    //                 })
    //         }
    //         // @ts-ignore
    //         zoomTo([root.x, root.y, root.r * 2]);
    //     }
    
    //     chart.render = (function(){
    
    //         chart.renderTitle();
    
    //         chart.renderCircle();
    
    //         chart.renderText();
    
    //         chart.addMouseOn();
    
    //     }) as () => Chart
    
    //     chart.renderChart();
    
    // }

    

    renderZoomableEnclosure(){
        // const {height,width} = this.state
        const height = (document.getElementById("MyFisheyeDiagram") as HTMLElement).clientHeight - 200;
        const width = (document.getElementById("MyFisheyeDiagram") as HTMLElement).clientWidth - 300
        const color = d3.scaleLinear()
                        .domain([0, 5])
                        // @ts-ignore
                        .range(["hsl(110,90%,80%)", "hsl(250,10%,30%)"])
                        // @ts-ignore
                        .interpolate(d3.interpolateHcl)

        const pack = (data:any) => d3.pack()
            .size([width, height])
            .padding(3)
         (d3.hierarchy(data)
            .sum(d => d.value)
            // @ts-ignore
            .sort((a, b) => b.value - a.value)) 
        /* (d3.hierarchy(data)
            .sum(d => d.value.length())
            // @ts-ignore
            .sort((a, b) => b.value.length() - a.value.length())) */
        // @ts-ignore
        const root = pack(data);
        let focus = root;
        let view: d3.ZoomView  ;

        
        // @ts-ignore
        function zoomed({transform}) {
            // @ts-ignore
            g.attr("transform", transform);
        }

        const svg = d3.select("#MyFisheyeDiagram")
                    .append("svg")
                    .attr("height",height/16)
                    .attr("width",width/16)
            .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
            // .attr("transform", `translate(${0},${-14})`)
            .style("display", "block")
            .style("margin", "0 -14px")
            // .style("width", "calc(100% + 28px)")
            .style("width",`calc(101.5%)`)
            .style("height", `calc(100%)`)
            // .style("background", color(0))
            .style("cursor", "pointer")
            .on("click", () => zoom(root))
            // @ts-ignore
            // .call(d3.zoom()
            // .extent([[0, 0], [width, height]])
            // .scaleExtent([1, 8])
            // // @ts-ignore
            // .on("zoom", ({transform}) => svg.attr("transform",transform) ))
            

        const node = svg.append("g")
            .selectAll("circle")
            .data(root.descendants().slice(1))
            .join("circle")
            // @ts-ignore
            .attr("fill", d => d.children ? color(d.depth) : "white")
            // @ts-ignore
            .attr("pointer-events", d => !d.children ? "none" : null)
            .on("mouseover", function() { d3.select(this).attr("stroke", "#000"); })
            .on("mouseout", function() { d3.select(this).attr("stroke", null); })
            .on("click", (event,d) => focus !== d && (zoom(d), event.stopPropagation()))
            

        const label = svg.append("g")
            .style("font", "1rem sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            // @ts-ignore
            .style("fill-opacity", d => d.parent === root ? 1 : 0)
            // @ts-ignore
            .style("display", d => d.parent === root ? "inline" : "none")
            // @ts-ignore
            .text(d => d.data.name);

        zoomTo([root.x, root.y, root.r * 2]);

        function zoomTo(v: any[] | null) {
            // @ts-ignore
            const k = width / v[2];
            // @ts-ignore
            view = v;
            // @ts-ignore
            label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            // @ts-ignore
            node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            // @ts-ignore
            node.attr("r", d => d.r * k);
        }

        function zoom(d: any) {
            const focus0 = focus;

            focus = d;

            const transition = svg.transition()
            // @ts-ignore
                // .duration((event,d) => event.altKey ? 7500 : 750)
                .duration(750)
                .tween("zoom", d => {
                    // @ts-ignore
                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                return t => zoomTo(i(t));
                });

            label
            // @ts-ignore
            .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            // @ts-ignore
            .transition(transition)
            // @ts-ignore
                .style("fill-opacity", d => d.parent === focus ? 1 : 0)
                // @ts-ignore
                .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
                // @ts-ignore
                .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
        }
    }

    public render() : JSX.Element {
        return (
            <div 
                className='MyFisheyeDiagram'
                id='MyFisheyeDiagram'
                style={{...this.props.theme}}
            >
                <MyHeader title='FishEyeDiagram'></MyHeader>
                
                {/* <nav>
                    <Link to="/two">Two</Link>
                </nav> */}
            </div>
        )
    }
}

const mapStateToProps = (state:StoreType,ownProps?:any) => {
    const {Main} = state
    return {
        ...ownProps,
        Main
    }
}

const mapDispatchToProps = {
    
}


export default ( connect(mapStateToProps,mapDispatchToProps)(MyFisheyeDiagram));