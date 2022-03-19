import React, {Component} from 'react';
import * as d3 from "d3"
import { NumberValue } from 'd3';

interface MyMatrixViewProps {
  theme:any
}
interface MyMatrixViewState {
  padding:{
    height:number,
    width:number,
    top: number,
    left: number,
    right: number,
    bottom: number,
  }
}
class MyMatrixView extends Component <MyMatrixViewProps, MyMatrixViewState>{
    public constructor(props : MyMatrixViewProps) {
        super(props)
        this.state = {
          padding:{
            height: 280,
            width: 400,
            top: 1,
            left: 35,
            right: 10,
            bottom: 20,
          }
          
      }
    }

    xAxis = (g:any, x:any) => {
      const {padding} = this.state
      g.attr("transform", `translate(0,${padding.top})`)
          // .call()函数：对整体集合进行操作，后面括号里的是回调函数。
          .call(d3.axisBottom(x)) // 坐标生成器
          .call((g:any) => {
              g.selectAll("text").attr("dy", -0.9)
              const text = g.selectAll("text")
              const textList = text["_groups"][0]
              // for (let i = 0; i < textList.length; i++) {
              //     textList[i].innerHTML = strs  
              //   // const strs = textList[i].innerHTML.split(":")
              //     // if (strs[1] === "00") {
              //     //     textList[i].innerHTML = strs[0]
              //     // } else {
              //     //     textList[i].innerHTML = ""
              //     // }
              // }
          })
          .call((g:any) => g.selectAll("path").remove())
          .call((g:any) => g.selectAll("line").remove())
    }

    yAxis = (g:any, y:any) => {
      const {padding} = this.state
      g.attr("transform", `translate(${padding.left},0)`)
          // .call(d3.axisLeft(y).tickFormat(this.formatDay()))
          // @ts-ignore
          .call(d3.axisLeft(y).tickFormat((d) => d))
          .call((g:any) => g.select(".domain").remove())
          .call((g:any) => g.selectAll("text").attr("font-size", "8px"))
          .call((g:any) => g.selectAll("line").attr("stroke", "rgb(140,140,140)"))
    }


    renderMatrixViewBackgound(){
      const {padding} = this.state
      const monthArray = [6,7,8,9]
      const categoryArray = ["category1","category2","category3","category4","category5"]
      const basicData: { month: number; category: string; }[] = []
      monthArray.forEach((item,index) => {
        categoryArray.forEach((categoryItem,categoryIndex) => {
          basicData.push({
            month:item,
            category:categoryItem
          })
        })
      })
      
      // console.log("matrix basicData",basicData)

      const xScale = d3.scaleBand(categoryArray as Iterable<NumberValue>,[35, padding.width - padding.right]).padding(0.3)
      const yScale = d3.scaleBand(monthArray,[15, padding.height-100]).padding(0.3)

      const canvas = d3.select("#MyMatrixView")
                    .append("svg")
                    .attr("class","g svg-basic")
                    .attr("viewBox", [0, 0, padding.width, padding.height])
      
      const svg = canvas.append("g")
                        .attr("class","g basic")

      const xAxis = canvas.append("g")
                        .attr("id","xAxis")
                        .call(this.xAxis,xScale)

      const yAxis = canvas.append("g")
                        .attr("id",'yAxis')
                        .call(this.yAxis,yScale)

        svg
            .selectAll(".rect-basic")
            .data(basicData) // 
            .join("rect")
            .attr("class", "rect-basic")
            // @ts-ignore
            .attr("x", d => xScale(d.category))
            // @ts-ignore
            .attr("y", d => yScale(d.month))
            .attr("width",xScale.bandwidth() + 2 )
            .attr("height", yScale.bandwidth() - 2)
            .attr("fill", d => {
                return "rgb(204,204,204)"
            })
            .attr("stroke", "none")
            .attr("opacity", 0.8)
            .on("click",(event: any,d: any) => {
                
            })
      
    }

    componentDidMount(){
      this.renderMatrixViewBackgound()
    }

    public render() : JSX.Element {
        return (
            <div
              className="MyMatrixView"
              id='MyMatrixView'
              style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyMatrixView;