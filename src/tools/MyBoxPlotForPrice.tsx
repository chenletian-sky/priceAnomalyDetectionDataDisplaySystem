import React, {Component} from 'react';


interface MyBoxPlotForPriceProps {
  theme:any
}
interface MyBoxPlotForPriceState {

}
class MyBoxPlotForPrice extends Component <MyBoxPlotForPriceProps, MyBoxPlotForPriceState>{
    public constructor(props : MyBoxPlotForPriceProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyBoxPlotForPrice'
              id='MyBoxPlotForPrice'
              style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyBoxPlotForPrice;