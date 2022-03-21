import React from 'react'
import { Outlet, useNavigate } from 'react-router'

import ProCard from '@ant-design/pro-card';
import '@ant-design/pro-card/dist/card.css'

import { Themes } from '../../tools/position'

import MyFisheyeDiagram from './components/myFisheyeDiagram'
import MyForceDirectedGraph from './components/myForceDirectedGraph'
import MyMatrixView from './components/myMatrixView'
import MyParallelCoordinateSystemDiagram from './components/myParallelCoordinateSystemDiagram'
import MyFrame from '../../components/MyFrame';
import { useLocation } from 'react-router';

interface BaseInfoOneProps{
  // history:any
}

export default function BaseInfoOne(props:BaseInfoOneProps) {
  const navigate = useNavigate()
  const myLocation = useLocation()
  console.log("baseInfo 1",myLocation)
  // navigate("/two")
  // console.log("pageOne",navigate)
  const myHandleClick = () => {
    navigate("two")
  }
  let flag = myLocation.pathname.includes("/page1/")

  // const selectPages = () => {
  //   if(myLocation.pathname.includes("fisheye")){
  //     flag = 1
  //   }
  // }

  return (

  <>
  {
    flag ? <Outlet /> : <ProCard
    split='vertical'
    bordered
    headerBordered
    style={{
      height:"100%",
      // width:"100%"
    }}
  >
    <ProCard
      colSpan={16}
      style={{
        height:"100%",
        width:"100%"
      }}
    >
      <MyFisheyeDiagram theme={Themes.TestChartTheme}/>
    </ProCard>
    
    <ProCard
      colSpan={8}
      // split="horizontal"
      // direction='column'
      // gutter={[ ]}
      // wrap={true}
      style={{
        height:"100%",
        width:"100%"
      }}
    >
      <MyParallelCoordinateSystemDiagram theme={Themes.MyParallelCoordinateSystemDiagramTheme} />
      <MyForceDirectedGraph theme={Themes.MyForceDirectedGraphTheme} />
      <MyMatrixView theme={Themes.MyMatrixViewTheme} />
    </ProCard>

  </ProCard>
  }
    
  </>)

  // return (
  //   <>
  //     {/* <button onClick={myHandleClick}>click</button> */}
  //     <div
  //       style={{
  //         position:"relative",
  //         float:"left",
  //         height:"100%",
  //         width:"60%"
  //       }}
  //     >
  //       <MyFisheyeDiagram
  //           theme={Themes.MyFisheyeDiagramTheme}
  //       />
  //     </div>
  //     <div
  //       style={{
  //         position:"relative",
  //         float:"left",
  //         height:"100%",
  //         width:"40%",
  //       }}
  //     >
  //       <MyParallelCoordinateSystemDiagram
  //           theme={Themes.MyParallelCoordinateSystemDiagramTheme}
  //           myLocation={undefined}
  //       />
  //       {/* <MyColumnChartFirst
  //           theme={Themes.MyColumnChartFirstTheme}
  //       ></MyColumnChartFirst> */}
  //       <MyForceDirectedGraph
  //           theme={Themes.MyForceDirectedGraphTheme}
  //       />
  //       <MyMatrixView
  //           theme={Themes.MyMatrixViewTheme}
  //       />
  //       {/* <MyCalendarMap
  //           theme={Themes.MyCalendarTheme}
  //       ></MyCalendarMap> */}
  //     </div>
      
  // </>
  // )
}
