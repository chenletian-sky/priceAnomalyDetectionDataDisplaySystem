import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Comp from './tools/CompTheme';
import MyBubbleChart from './tools/MyBubbleChart';
import MyCalendarMap from './tools/myCalendarMap';
import MyColumnChartFirst from './tools/myColumnChartFirst';
import MyControl from './tools/MyControl';
import MyFisheyeDiagram from './tools/myFisheyeDiagram';
import MyHierarchicalColumnChart from './tools/MyHierarchicalColumnChart';
import MyHotSearchProductWordCloudMap from './tools/MyHotSearchProductWordCloudMap';
import MyMap from './tools/MyMap';
import MyParallelCoordinateSystemDiagram from './tools/myParallelCoordinateSystemDiagram';
import MyPriceLineChart from './tools/MyPriceLineChart';
import MyProportionPieChart from './tools/MyProportionPieChart';
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
            <MyColumnChartFirst
                theme={Themes.MyColumnChartFirstTheme}
            ></MyColumnChartFirst>
            <MyCalendarMap
                theme={Themes.MyCalendarTheme}
            ></MyCalendarMap>
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