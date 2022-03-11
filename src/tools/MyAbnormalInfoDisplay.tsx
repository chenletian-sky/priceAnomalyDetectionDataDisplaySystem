import { Table } from 'antd';
import React, {Component} from 'react';


interface MyAbnormalInfoDisplayProps {
  theme:any
}
interface MyAbnormalInfoDisplayState {

}

const columns = [
  {
    title: '异常商品名称',
    dataIndex: 'name',
  },
  {
    title: '信息1',
    dataIndex: 'info1',
  },
  {
    title: '信息2',
    dataIndex: 'info2',
  },
];
const data = [
  {
    key: '1',
    name: '商品1',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
  {
    key: '2',
    name: '商品2',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
  {
    key: '3',
    name: '商品3',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
  {
    key: '4',
    name: '商品4',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
  {
    key: '5',
    name: '商品5',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
  {
    key: '6',
    name: '商品6',
    info1: "xxxxxxx",
    info2: 'xxxxxxx',
  },
];

class MyAbnormalInfoDisplay extends Component <MyAbnormalInfoDisplayProps, MyAbnormalInfoDisplayState>{
    public constructor(props : MyAbnormalInfoDisplayProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyAbnormalInfoDisplay'
              id='MyAbnormalInfoDisplay'
              style={{...this.props.theme}}
            >
              <Table 
                columns={columns} 
                dataSource={data} 
                size="middle" 
              />
            </div>
       )
    }
}
export default MyAbnormalInfoDisplay;