import React from 'react'
import MyBubbleChart from '../../tools/MyBubbleChart'
import MyControl from '../../tools/MyControl'
import MyHierarchicalColumnChart from '../../tools/MyHierarchicalColumnChart'
import MyHotSearchProductWordCloudMap from '../../tools/MyHotSearchProductWordCloudMap'
import MyMap from '../../tools/MyMap'
import MyPriceLineChart from '../../tools/MyPriceLineChart'
import MyProportionPieChart from '../../tools/MyProportionPieChart'
import { Themes } from '../../tools/position'

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
