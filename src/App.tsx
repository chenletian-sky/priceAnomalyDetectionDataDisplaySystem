import React, { Component } from 'react';
import "./App.css"
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import TimeBox from './components/TimeBox';
import AbnormalInfo from './pages/AbnormalInfo';
import BaseInfoOne from './pages/BaseInfoOne';
import BaseInfoTwo from './pages/BaseInfoTwo';
import TestChartPage from './pages/TestChartPage';

import { Themes } from './tools/position';
import { acceptGlobalData } from './action';
import { connect, connectAdvanced } from 'react-redux';

const allDataForGlobal = require("./constants/data/filter_try_data.json")

interface AppProps {
    acceptGlobalData: typeof acceptGlobalData
}
interface AppState {

}
class App extends Component<AppProps, AppState>{
    public constructor(props: AppProps) {
        super(props)
    }

    componentDidMount(){
        // console.log("globalData",allDataForGlobal)
        this.props.acceptGlobalData(allDataForGlobal)
    }

    public render(): JSX.Element {
        const liList:Array<Object> = [
            {
                name:"基础信息展示1",
                path:""
            }, 
            {
                name:"基础信息展示2",
                path:"two"
            }, 
            {
                name:"异常信息展示",
                path:"three"
            }]
        return (
            <div className="App">
                <div className="head clearfix">
						<h2 className="pull_left">商品价格异常可视分析系统</h2>
						<div className="menu menu2 pull_left">
							<ul>
								{
									liList.map((value:any, index: number) => (
										<li key={index} >
											<NavLink
                                                to ={`${value.path}`}
                                                // className={({ isActive }) => {
                                                //     console.log('home', isActive)
                                                //     return isActive ? 'base one' : 'base'
                                                // }}
                                            >{value.name}</NavLink>
											
										</li>
									))
								}
							</ul>
						</div>
						<TimeBox />
					</div>
					<div 
                        className='main-container'
                        style={{
                            height:"92%",
                            width:"100%"
                        }}
                    >
						<Routes>
                            <Route path="/" element={<BaseInfoOne  />} />
                            <Route path="/two" element={<BaseInfoTwo />} />
                            <Route path='/three' element={<AbnormalInfo />}></Route>
                            <Route path='/test' element={<TestChartPage/>}></Route>
                        </Routes>
					</div>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    acceptGlobalData
}

export default connect(null,mapDispatchToProps)(App);

