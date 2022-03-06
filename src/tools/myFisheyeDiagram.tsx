import React, {Component} from 'react';
import {}

interface MyFisheyeDiagramProps {
    theme:any
    // test push
}
interface MyFisheyeDiagramState {

}
class MyFisheyeDiagram extends Component <MyFisheyeDiagramProps, MyFisheyeDiagramState>{
    public constructor(props : MyFisheyeDiagramProps) {
        super(props)
    }

    public render() : JSX.Element {
        return (
            <div 
                className='MyFisheyeDiagram'
                style={{...this.props.theme}}
            >

            </div>
       )
    }
}
export default MyFisheyeDiagram;