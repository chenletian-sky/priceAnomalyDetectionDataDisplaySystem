import React, {Component} from 'react';
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | BarSeriesOption
>;


interface MyColumnChartFirstProps {
    theme:any
}
interface MyColumnChartFirstState {

}
class MyColumnChartFirst extends Component <MyColumnChartFirstProps, MyColumnChartFirstState>{
    public constructor(props : MyColumnChartFirstProps) {
        super(props)
    }

    componentDidMount(){
        this.renderMyColumnChartFirst()
    }

    renderMyColumnChartFirst(){
        var chartDom = document.getElementById("MyColumnChartFirst")
        var myChart = echarts.init(chartDom as any);
        var option: EChartsOption;

        option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            // {
            // name: 'Direct',
            // type: 'bar',
            // stack: 'total',
            // label: {
            //     show: true
            // },
            // emphasis: {
            //     focus: 'series'
            // },
            // data: [320, 302, 301, 334, 390, 330, 320]
            // },
            // {
            // name: 'Mail Ad',
            // type: 'bar',
            // stack: 'total',
            // label: {
            //     show: true
            // },
            // emphasis: {
            //     focus: 'series'
            // },
            // data: [120, 132, 101, 134, 90, 230, 210]
            // },
            // {
            // name: 'Affiliate Ad',
            // type: 'bar',
            // stack: 'total',
            // label: {
            //     show: true
            // },
            // emphasis: {
            //     focus: 'series'
            // },
            // data: [220, 182, 191, 234, 290, 330, 310]
            // },
            // {
            // name: 'Video Ad',
            // type: 'bar',
            // stack: 'total',
            // label: {
            //     show: true
            // },
            // emphasis: {
            //     focus: 'series'
            // },
            // data: [150, 212, 201, 154, 190, 330, 410]
            // },
            {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                // show: true
                show:false
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
        };

        option && myChart.setOption(option);
    }

    public render() : JSX.Element {
        return (
            <div className='MyColumnChartFirst' id="MyColumnChartFirst" style={{...this.props.theme}}>

            </div>
       )
    }
}
export default MyColumnChartFirst;