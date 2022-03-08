import React, {Component} from 'react';
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

interface MyPriceLineChartProps {
    theme:any
}
interface MyPriceLineChartState {

}
class MyPriceLineChart extends Component <MyPriceLineChartProps, MyPriceLineChartState>{
    public constructor(props : MyPriceLineChartProps) {
        super(props)
    }

    componentDidMount(){
        this.renderMyPriceLineChart()
    }

    renderMyPriceLineChart(){
        var chartDom = document.getElementById('MyPriceLineChart')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;

        option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
            }
        ]
        };

        option && myChart.setOption(option);

    }

    public render() : JSX.Element {
        return (
            <div
                className='MyPriceLineChart'
                id='MyPriceLineChart'
                style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyPriceLineChart;