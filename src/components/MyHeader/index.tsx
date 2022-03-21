import React from "react";

import { Button, Select } from 'antd'
// import 'antd/dist/antd.css';

const { Option } = Select

interface HeadingProps {
  title:string,
  // Control:any
}

export default function Heading (props:HeadingProps){
    const HeadingStyle = {
      position:"absolute",
      top:"1px",
      left:"1px",
      height: "30px",
      width: "fit-content",
      background:
        "-webkit-linear-gradient(top,rgb(244,244,244),rgb(233,233,233))",
      color: "black",
      float: "left",
      fontSize: "16px",
      padding: "2.5px 20px",
      fontWeight: 600,
      borderRadius:"5px"
    };
    const SpanStyle = {
      marginLeft: "5px",
      marginTop: "15px",
      // float:"left"
    };
    // // 需要控件
    // const flag = typeof (props.Control) !== 'undefined'
    // // key是需要类型
    // // name是控件信息
    // var key;
    // var name;
    // if (flag === true) {
    //   for (let c in props.Control) {
    //     key = c
    //     name = props.Control[c]
    //   }
    // }
    return (
      <div className="Heading" style={HeadingStyle as  React.CSSProperties}>
        <span style={SpanStyle as React.CSSProperties}>{props.title}</span>
        {/* {flag === true ?
          key === 'Button' ?
            <Button  type="dashed" style={{ float: 'right', marginRight: 5, height: 28, marginTop: -3 }}>Browser</Button> :
            key === 'Select' ?
              <div style={{ float: 'right' }}>

                <Select defaultValue={`${name.value[0]}`} style={{ float: 'right', marginTop: -4, width: 80 }}>
                  {name.value.map((n:any) => {
                    return <Option value={`${n}`}>{n}</Option>
                  })}
                </Select>
                <div style={{ float: "right", fontSize: 14, marginRight: 15 }}>{`${name.key}:`}</div>
              </div>
              : null
          : null} */}
      </div>
    );
  }



  