import React from 'react'
import { useLocation } from 'react-router-dom'
import MyParallelCoordinateSystemDiagram from '../../tools/myParallelCoordinateSystemDiagram'
import { Themes } from '../../tools/position'

interface TestChartPageProps {

}

export default function TestChartPage(props:TestChartPageProps) {
  const routeInfo = useLocation()
  
  return (
    <>
      {/* <MyParallelCoordinateSystemDiagram
        theme={Themes.TestChartTheme}
        myLocation={routeInfo}
      /> */}
    </>
  )
}
