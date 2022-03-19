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
const data:Array<any> = []
for(let i=0;i<100;i++){
  data.push({
    key:i,
    name: `商品${i}`,
    info1:"xxxxxx",
    info2:"XXXXXX"
  })
}

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
                size="small" 
                scroll={{
                  // y:`calc(10% - ${400})`
                }}
                pagination={{
                  pageSize: 5,
                  showSizeChanger:false
                }}
              />
            </div>
       )
    }
}
export default MyAbnormalInfoDisplay;