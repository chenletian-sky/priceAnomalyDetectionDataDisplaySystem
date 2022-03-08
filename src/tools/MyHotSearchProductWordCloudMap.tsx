import React, {Component} from 'react';
import * as echarts from 'echarts';
import 'echarts-wordcloud';
import { WordCloudImage } from "../types/propsTypes"
const WordsCloudData = require("./data/WordCloud_data.json")

interface WordCloudDataType{
    [classId:string]:Array<{
        name:string,
        value:number
    }>
} 



interface MyHotSearchProductWordCloudMapProps {
    theme:any
}
interface MyHotSearchProductWordCloudMapState {
    classId:string
}
class MyHotSearchProductWordCloudMap extends Component <MyHotSearchProductWordCloudMapProps, MyHotSearchProductWordCloudMapState>{
    public constructor(props : MyHotSearchProductWordCloudMapProps) {
        super(props)
        this.state = {
            classId: "词云",   //用于调节绘制哪个类的词云图
        }
    }

    componentDidMount(){
        this.createWordCloud()
    }

    createWordCloud = ()=>{
        var chartDom = document.getElementById('MyHotSearchProductWordCloudMap')!;
        var myCharts = echarts.init(chartDom);
        let {classId} = this.state;
        console.log(WordsCloudData)
        console.log(typeof(WordsCloudData))
        // jsonList 用于绘制对应类词云图的数据
        var jsonList:Array<{
            name: string;
            value: Number;
        }> = WordsCloudData[classId];

        var maskResource = new Image()
        maskResource.src = WordCloudImage;
        var option ={
            //设置标题，居中显示
            title:{
                text: "全国各景点简介综合词云图",
                left:'center',
                top:"0px",
                fill: "red",
            },
            //数据可以点击
            tooltip:{
            },
            series:[
                {
                    maskImage:maskResource,
                    //词的类型
                    type: 'wordCloud',
                    //设置字符大小范围
                    shape: 'circle',
                    sizeRange:[6,78],
                    rotationRange:[-45,90],
                    width: '100%',
                    height: '100%',
                    textStyle: {             //设置随机的字体颜色
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        color: function () {
                            // Random color
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        focus: 'self',
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    //不要忘记调用数据
                    data:jsonList
                }
            ]
        };

        //加载图像，将数据放在图像中

        maskResource.onload = function():void{
        
            myCharts.setOption(option)
            };
        // maskResource.onload()
    }

    public render() : JSX.Element {
        return (
            <div
                className='MyHotSearchProductWordCloudMap'
                id='MyHotSearchProductWordCloudMap'
                style={{...this.props.theme}}
            >
              
            </div>
       )
    }
}
export default MyHotSearchProductWordCloudMap;