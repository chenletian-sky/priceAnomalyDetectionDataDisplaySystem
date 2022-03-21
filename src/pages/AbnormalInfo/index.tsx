import React from 'react'

import { Themes } from '../../tools/position'

import MyAbnormalInfo from './components/MyAbnormalInfo'
import MyAbnormalInfoDisplay from './components/MyAbnormalInfoDisplay'
import MyBoxPlotForPrice from './components/MyBoxPlotForPrice'
import MyBoxPlotForSales from './components/MyBoxPlotForSales'
import MyControlForAbnormal from './components/MyControlForAbnormal'
import MyScatterForPrice from './components/MyScatterForPrice'
import MyScatterForSales from './components/MyScatterForSales'

interface AbnormalInfoProps{
  // history:any;
}

export default function AbnormalInfo(props:AbnormalInfoProps) {
  return (
    <>
        <div
            className="abnormalDisplayInterface left"
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"28%"
            }}
        >
            <MyControlForAbnormal
                theme={Themes.MyControlForAbnormalTheme}
            ></MyControlForAbnormal>
            <MyAbnormalInfo
                theme={Themes.MyAbnormalInfoTheme}
            ></MyAbnormalInfo>
            <MyAbnormalInfoDisplay
                theme={Themes.MyAbnormalInfoDisplayTheme}
            ></MyAbnormalInfoDisplay>
        </div>
        <div
            className="abnormalDisplayInterface center"
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"48%"
            }}
        >
            <MyScatterForPrice
                theme={Themes.MyScatterForPriceTheme}
            ></MyScatterForPrice>
            <MyScatterForSales
                theme={Themes.MyScatterForSalesTheme}
            ></MyScatterForSales>
        </div>
        <div
            className="abnormalDisplayInterface right"
            style={{
                position:"relative",
                float:"left",
                height:"100%",
                width:"24%"
            }} 
        >
            <MyBoxPlotForPrice
                theme={Themes.MyBoxPlotForPriceTheme}
            ></MyBoxPlotForPrice>
            <MyBoxPlotForSales
                theme={Themes.MyBoxPlotForSalesTheme}
            ></MyBoxPlotForSales>
        </div>
    </>
  )
}
