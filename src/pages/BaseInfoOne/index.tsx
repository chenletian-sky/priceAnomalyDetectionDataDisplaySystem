import React from 'react'
import { useNavigate } from 'react-router'
import MyFisheyeDiagram from '../../tools/myFisheyeDiagram'
import MyForceDirectedGraph from '../../tools/myForceDirectedGraph'
import MyMatrixView from '../../tools/myMatrixView'
import MyParallelCoordinateSystemDiagram from '../../tools/myParallelCoordinateSystemDiagram'
import { Themes } from '../../tools/position'

interface BaseInfoOneProps{
  // history:any
}

export default function BaseInfoOne(props:BaseInfoOneProps) {
  const navigate = useNavigate()
  // navigate("/two")
  // console.log("pageOne",navigate)
  const myHandleClick = () => {
    navigate("two")
  }
  return (
    <>
      {/* <button onClick={myHandleClick}>click</button> */}
      <MyFisheyeDiagram
          theme={Themes.MyFisheyeDiagramTheme}
      />
      <MyParallelCoordinateSystemDiagram
          theme={Themes.MyParallelCoordinateSystemDiagramTheme}
      />
      {/* <MyColumnChartFirst
          theme={Themes.MyColumnChartFirstTheme}
      ></MyColumnChartFirst> */}
      <MyForceDirectedGraph
          theme={Themes.MyForceDirectedGraphTheme}
      />
      <MyMatrixView
          theme={Themes.MyMatrixViewTheme}
      />
      {/* <MyCalendarMap
          theme={Themes.MyCalendarTheme}
      ></MyCalendarMap> */}
  </>
  )
}
