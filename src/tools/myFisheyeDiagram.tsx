import React, {Component} from 'react';
import * as d3 from "d3";
import Chart from './zoomableEnclosure/chart';

const data = require("./zoomableEnclosure/data.json")

interface MyFisheyeDiagramProps {
    theme:any;
    // test push
}
interface MyFisheyeDiagramState {

}
class MyFisheyeDiagram extends Component <MyFisheyeDiagramProps, MyFisheyeDiagramState>{
    public constructor(props : MyFisheyeDiagramProps) {
        super(props)
    }

    componentDidMount(){
        this.renderZoomableEnclosure()
    }

    renderZoomableEnclosure(){
        /* ----------------------------配置参数------------------------  */
        const chart = new Chart();
        const config = {
            margins: {top: 80, left: 80, bottom: 50, right: 80},
            textColor: 'black',
            title: '测试用可缩放鱼眼图',
            hoverColor: 'white',
            animateDuration: 1000
        }
    
        chart.margins(config.margins);
    
        /* ----------------------------数据转换------------------------  */
        const root = d3.hierarchy(data)
                        .sum((d:any) => d.house)
                        .sort((a:any,b:any) => a.value - b.value);
    
        const pack = d3.pack()
                        .size([chart.getBodyWidth(), chart.getBodyHeight()])
    
        pack(root);
    
        let focusCircle = root;
        let prevView: d3.ZoomView;
    
        /* ----------------------------渲染圆圈------------------------  */
        let groups;
        chart.renderCircle = function(){
            groups = chart.body().selectAll('.g')
                                        .data(root.descendants().slice(1));
    
            groups.enter()
                    .append('g')
                    .attr('class', (d: any, i: string) => 'g g-' + i)
                    .attr('transform', () => 'translate(' + chart.getBodyWidth()/2 + ',' + chart.getBodyHeight()/2 + ')')
                    .append('circle')
                    .attr('class', 'circle')
                .merge(groups.selectAll('.circle'))
                    .attr('fill', (d: { depth: number; }) => chart._colors(d.depth % 10));
    
            groups.exit()
                    .selectAll('.circle')
                    .transition().duration(config.animateDuration)
                    .attr('r', 0)
                    .remove();
        }
    
        /* ----------------------------渲染文本标签------------------------  */
        chart.renderText = function(){
    
            const texts = chart.body().selectAll('.text')
                                        .data(root.descendants());
    
                texts.enter()
                        .append('text')
                        .attr('class', 'text')
                    .merge(texts)
                        .text((d: { data: { name: any; }; }) => d.data.name)
                        .attr('stroke', config.textColor)
                        .attr('fill', config.textColor)
                        .attr('text-anchor', 'middle')
                        .text( function(d:any){
                            if (d.children) return;
                            // @ts-ignore
                            if (textWidthIsOk(d, this)){
                                return d.data.name;
                            }else{
                                return d.data.name.slice(0,3);
                            }
                          })
    
            // 检测文本长度是否合适
            function textWidthIsOk(d: any, text:any){
                const textWidth = text.getBBox().width;
                if (d.r*2 >= textWidth) return true;
                return false;
                // console.log("text",text,d)
                // return true
            }
    
        }
    
        /* ----------------------------渲染图标题------------------------  */
        chart.renderTitle = function(){
            chart.svg().append('text')
                    .classed('title', true)
                    .attr('x', (chart.width() as number)/2 )
                    .attr('y', 0)
                    .attr('dy', '2em')
                    .text(config.title)
                    .attr('fill', config.textColor)
                    .attr('text-anchor', 'middle')
                    .attr('stroke', config.textColor);
    
        }
    
        /* ----------------------------绑定鼠标交互事件------------------------  */
        chart.addMouseOn = function(){
    
            d3.selectAll('.g circle')
                .on('mouseover', function(event){
                    // const e = d3.event;
                    const e = event
                    e.target.style.cursor = 'hand'
    
                    d3.select(e.target)
                        .attr('stroke', config.hoverColor);
    
                })
                .on('mouseleave', function(event,d){
                    // const e = d3.event;
                    const e = event
                    d3.select(e.target)
                        .attr('stroke', null);
                })
                .on('click', function(event,d){
                    if (focusCircle !== d){
                        zoom(d as any);
    
                        event.stopPropagation();
                    }
                });
    
            chart.svg()
                    .style("cursor", "poniter")
                    .on("click", () => zoom(root));
    
            function zoom(d: d3.HierarchyNode<any>){
                focusCircle = d ;
    
                chart.svg()
                        .transition()
                        .duration(config.animateDuration)
                        .tween("zoom", (d: any) => {
                            // @ts-ignore
                            const i = d3.interpolateZoom(prevView, [(focusCircle as d3.HierarchyNode<any>).x, focusCircle.y, focusCircle.r * 2]);
                            return (t: number) => zoomTo(i(t));
                        });
            }
    
            function zoomTo(v: any[]){
                const k = chart.getBodyHeight() / v[2];
    
                prevView = v as any;
    
                d3.selectAll("circle")
                    .attr("transform", (d) => {
                        return `translate(${((d as any).x - v[0]) * k},${((d as any).y - v[1]) * k})`;
                    })
                    .attr("r", (d) => (d as any).r * k);
    
                d3.selectAll(".text")
                    .attr("transform", (d) => {
                        return `translate(${((d as any).x - v[0]) * k + chart.getBodyWidth()/2},${((d as any).y - v[1]) * k  + chart.getBodyHeight()/2}) scale(${k})`;
                    })
            }
            // @ts-ignore
            zoomTo([root.x, root.y, root.r * 2]);
        }
    
        chart.render = (function(){
    
            chart.renderTitle();
    
            chart.renderCircle();
    
            chart.renderText();
    
            chart.addMouseOn();
    
        }) as () => Chart
    
        chart.renderChart();
    
    }

    public render() : JSX.Element {
        return (
            <div 
                className='MyFisheyeDiagram'
                id='MyFisheyeDiagram'
                style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyFisheyeDiagram;