import React, {Component} from 'react';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | PieSeriesOption
>;

interface MyProportionPieChartProps {
    theme:any
}
interface MyProportionPieChartState {

}
class MyProportionPieChart extends Component <MyProportionPieChartProps, MyProportionPieChartState>{
    public constructor(props : MyProportionPieChartProps) {
        super(props)
    }

    componentDidMount(){
        this.renderMyProportionPieChart()
    }

    renderMyProportionPieChart(){
        // d3.select("#MyProportionPieChart").append()
        var chartDom = document.getElementById('MyProportionPieChart')!;
        var myChart = echarts.init(chartDom);
        var option: EChartsOption;

        option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            show:false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            }
        ]
        };

        option && myChart.setOption(option);

    }

    public render() : JSX.Element {
        return (
            <div
                className='MyProportionPieChart'
                id='MyProportionPieChart'
                style={{...this.props.theme}}
            >
              
            </div>
       )
    }
}
export default MyProportionPieChart;