import React, {Component} from 'react';


interface MyBoxPlotForSalesProps {
  theme:any
}
interface MyBoxPlotForSalesState {

}
class MyBoxPlotForSales extends Component <MyBoxPlotForSalesProps, MyBoxPlotForSalesState>{
    public constructor(props : MyBoxPlotForSalesProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div
              className='MyBoxPlotForSales'
              id='MyBoxPlotForSales'
              style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyBoxPlotForSales;