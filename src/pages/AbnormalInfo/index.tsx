import React from 'react'
import MyAbnormalInfo from '../../tools/MyAbnormalInfo'
import MyAbnormalInfoDisplay from '../../tools/MyAbnormalInfoDisplay'
import MyBoxPlotForPrice from '../../tools/MyBoxPlotForPrice'
import MyBoxPlotForSales from '../../tools/MyBoxPlotForSales'
import MyControlForAbnormal from '../../tools/MyControlForAbnormal'
import MyScatterForPrice from '../../tools/MyScatterForPrice'
import MyScatterForSales from '../../tools/MyScatterForSales'
import { Themes } from '../../tools/position'

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
