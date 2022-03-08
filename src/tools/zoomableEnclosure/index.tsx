import React, {Component} from 'react';
import Chart from "./chart";
import * as d3 from "d3";

const data = require("./data.json")



interface IndexProps {

}
interface IndexState {

}
class Index extends Component <IndexProps, IndexState>{
    public constructor(props : IndexProps) {
        super(props)
    }

    componentDidMount(){
        // this.renderZoomableEnclosure()
    }

    

    

    public render() : JSX.Element {
        return (
            <div id="IndexRoot">

            </div>
       )
    }
}
export default Index;

// export function 

d3.json('./data.json').then(function(data){

    

});














