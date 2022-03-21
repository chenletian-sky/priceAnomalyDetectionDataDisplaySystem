import React, {Component} from 'react';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  CalendarComponent,
  CalendarComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  VisualMapComponent,
  VisualMapComponentOption
} from 'echarts/components';
import { HeatmapChart, HeatmapSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  CalendarComponent,
  TooltipComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | CalendarComponentOption
  | TooltipComponentOption
  | VisualMapComponentOption
  | HeatmapSeriesOption
>;

interface MyCalendarMapProps {
    theme:any
}
interface MyCalendarMapState {

}
class MyCalendarMap extends Component <MyCalendarMapProps, MyCalendarMapState>{
    public constructor(props : MyCalendarMapProps) {
        super(props)
    }

    componentDidMount(){
        this.renderMyCalendarMap()
    }

    renderMyCalendarMap(){

        var chartDom = document.getElementById('MyCalendarMap')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;

        function getVirtulData(year: string) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate(+year + 1 + '-01-01');
        var dayTime = 3600 * 24 * 1000;
        var data: [string, number][] = [];
        for (var time = date; time < end; time += dayTime) {
            data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
            ]);
        }
        return data;
        }

        option = {
        title: {
            top: 30,
            left: 'center',
            text: 'Daily Step Count'
        },
        tooltip: {},
        visualMap: {
            min: 0,
            max: 10000,
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 65
        },
        calendar: {
            top: 120,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: '2016',
            itemStyle: {
            borderWidth: 0.5
            },
            yearLabel: { show: false }
        },
        series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData('2016')
        }
        };

        option && myChart.setOption(option);

    }

    public render() : JSX.Element {
        return (
            <div className='MyCalendarMap' id="MyCalendarMap" style={{...this.props.theme}}>

            </div>
       )
    }
}
export default MyCalendarMap;