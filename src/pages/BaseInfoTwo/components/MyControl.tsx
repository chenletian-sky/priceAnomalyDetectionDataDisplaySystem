import React, {Component} from 'react';
import { Col, Row, Select } from 'antd';
const { Option } = Select;

interface MyControlProps {
    theme:any
}
interface MyControlState {

}
class MyControl extends Component <MyControlProps, MyControlState>{
    public constructor(props : MyControlProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div
                className='MyControl'
                style={{...this.props.theme}}
            >
                <div
                    style={{
                        // height:"100px",
                        // width:"400px",
                        position:"relative",
                        left:"290px",
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
                        left:"150px",
                        top:"40px"

                    }}
                >
                    <Row>
                        <Col span={6}>
                            <Select defaultValue={"日期"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        <Col span={6}>
                            <Select defaultValue={"一级类目"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        <Col span={6}>
                            <Select defaultValue={"二级类目"}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="test" children={undefined} ></Option>
                            </Select>    
                        </Col>
                        <Col span={6}>
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
export default MyControl;