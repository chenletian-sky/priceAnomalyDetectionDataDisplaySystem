import { Col, Row, Select } from 'antd';
import React, {Component} from 'react';

const {Option} = Select

interface MyControlForAbnormalProps {
    theme:any
}
interface MyControlForAbnormalState {

}
class MyControlForAbnormal extends Component <MyControlForAbnormalProps, MyControlForAbnormalState>{
    public constructor(props : MyControlForAbnormalProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyControlForAbnormal'
              id='MyControlForAbnormal'
              style={{...this.props.theme}}
            >
                <div
                    style={{
                        // height:"100px",
                        // width:"400px",
                        position:"relative",
                        left:"170px",
                        top:"20px"

                    }}
                >
                    控制面板
                </div>
                <div 
                    style={{
                        height:"100px",
                        width:"400px",
                        position:"relative",
                        left:"20px",
                        top:"60px"

                    }}
                >
                    <Row>
                        <Col span={8}>
                            <Select defaultValue={"一级类目"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        <Col span={8}>
                            <Select defaultValue={"二级类目"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        <Col span={8}>
                            <Select defaultValue={"三级类目"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        
                    </Row>
                </div>
            </div>
       )
    }
}
export default MyControlForAbnormal;