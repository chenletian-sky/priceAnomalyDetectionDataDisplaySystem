import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Comp from './tools/CompTheme';
import MyAbnormalInfo from './tools/MyAbnormalInfo';
import MyAbnormalInfoDisplay from './tools/MyAbnormalInfoDisplay';
import MyBoxPlotForPrice from './tools/MyBoxPlotForPrice';
import MyBoxPlotForSales from './tools/MyBoxPlotForSales';
import MyBubbleChart from './tools/MyBubbleChart';
import MyCalendarMap from './tools/myCalendarMap';
import MyColumnChartFirst from './tools/myColumnChartFirst';
import MyControl from './tools/MyControl';
import MyControlForAbnormal from './tools/MyControlForAbnormal';
import MyFisheyeDiagram from './tools/myFisheyeDiagram';
import MyForceDirectedGraph from './tools/myForceDirectedGraph';
import MyHierarchicalColumnChart from './tools/MyHierarchicalColumnChart';
import MyHotSearchProductWordCloudMap from './tools/MyHotSearchProductWordCloudMap';
import MyMap from './tools/MyMap';
import MyMatrixView from './tools/myMatrixView';
import MyParallelCoordinateSystemDiagram from './tools/myParallelCoordinateSystemDiagram';
import MyPriceLineChart from './tools/MyPriceLineChart';
import MyProportionPieChart from './tools/MyProportionPieChart';
import MyScatterForPrice from './tools/MyScatterForPrice';
import MyScatterForSales from './tools/MyScatterForSales';
import { Themes } from './tools/position';


interface AppProps {

}
interface AppState {

}
class App extends Component<AppProps, AppState>{
    public constructor(props: AppProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<InterfaceOne />} />
                    <Route path="/two" element={<InterfaceTwo />} />
                    <Route path='/three' element={<InterfaceThree />}></Route>
                </Routes>
            </div>
        )
    }
}
export default App;

function InterfaceOne() {
    return (
        <>
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
    );
}

function InterfaceTwo(){
    return(
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

// 异常数据展示
function InterfaceThree(){
    return(<>
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
    </>)
}