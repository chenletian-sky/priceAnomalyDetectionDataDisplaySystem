import React from 'react'



import { Themes } from '../../tools/position'
import MyBubbleChart from './components/MyBubbleChart'
import MyControl from './components/MyControl'
import MyHierarchicalColumnChart from './components/MyHierarchicalColumnChart'
import MyHotSearchProductWordCloudMap from './components/MyHotSearchProductWordCloudMap'
import MyMap from './components/MyMap'
import MyPriceLineChart from './components/MyPriceLineChart'
import MyProportionPieChart from './components/MyProportionPieChart'

interface BaseInfoTwo {
  // history:any
}

export default function BaseInfoTwo() {
  return (
    <>
        <div
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"25%"
            }}
        >
            <MyBubbleChart
                theme={Themes.MyBubbleChartTheme}
            />
            <MyPriceLineChart
                theme={Themes.MyPriceLineChartTheme}
            />
        </div>
        <div
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"50%"
            }}
        >
            <MyControl
                theme={Themes.MyControlTheme}
            />
            <MyMap
                theme={Themes.MyMapTheme}
            />
        </div>
        
        <div
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"25%"
            }}
        >
            <MyProportionPieChart
                theme={Themes.MyProportionPieChartTheme}
            />
            <MyHierarchicalColumnChart
                theme={Themes.MyHierarchicalColumnChartTheme}
            />
            <MyHotSearchProductWordCloudMap
                theme={Themes.MyHotSearchProductWordCloudMapTheme}
            />
        </div>
        
    </>
  )
}
