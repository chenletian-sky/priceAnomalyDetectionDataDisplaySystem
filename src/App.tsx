import React, { Component } from 'react';
import Comp from './tools/CompTheme';
import MyCalendarMap from './tools/myCalendarMap';
import MyColumnChartFirst from './tools/myColumnChartFirst';
import MyFisheyeDiagram from './tools/myFisheyeDiagram';
import MyParallelCoordinateSystemDiagram from './tools/myParallelCoordinateSystemDiagram';
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
                </div>
            
        )
    }
}
export default App;
