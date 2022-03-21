import React, { Component, useState } from 'react';
// import "./App.css"
import '@ant-design/pro-layout/dist/layout.css';
import Icon from '@ant-design/icons';
import { Link, NavLink, Route, Routes, useNavigate, useRoutes } from 'react-router-dom';
import TimeBox from './components/TimeBox';
import AbnormalInfo from './pages/AbnormalInfo';
import BaseInfoOne from './pages/BaseInfoOne';
import BaseInfoTwo from './pages/BaseInfoTwo';
import TestChartPage from './pages/TestChartPage';

import { Themes } from './tools/position';
import { acceptGlobalData } from './action';
import { connect, connectAdvanced } from 'react-redux';

import { Button, Descriptions, Result, Avatar, Space, Statistic } from 'antd';
import { LikeOutlined, UserOutlined } from '@ant-design/icons';
import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, SettingDrawer } from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import { RouterTypes } from '@ant-design/pro-layout/lib/typings';
import routes from './route'

/* const allDataForGlobal = require("./constants/data/filter_try_data.json")

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

export default connect(null,mapDispatchToProps)(App); */

// 终极改造 procomponent
const content = (
    <Descriptions size="small" column={2}>
        <Descriptions.Item label="创建人">张三</Descriptions.Item>
        <Descriptions.Item label="联系方式">
            <a>421421</a>
        </Descriptions.Item>
        <Descriptions.Item label="创建时间">2017-01-10</Descriptions.Item>
        <Descriptions.Item label="更新时间">2017-10-10</Descriptions.Item>
        <Descriptions.Item label="备注">中国浙江省杭州市西湖区古翠路</Descriptions.Item>
    </Descriptions>
);

export default () => {
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({ fixSiderbar: true });
    const [pathname, setPathname] = useState('/page1');
    const element = useRoutes(routes)
    const  myNavigate = useNavigate()
    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ProLayout
                {...defaultProps}
                headerRender={false}
                // title={() => (<p>hello<p/>)}
                menuHeaderRender = {() => {
                    return(<div id="title" style={{width: '180px',
                    height: '10px',
                    // backgroundColor: 'rgb(6, 96, 148)',
                    fontSize: '20px',
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    lineHeight: '16px',
                    zIndex: '1'}}>
                    {/* <Icon 
                      style={{textAlign: 'left',
                      height: '1.3px',
                      width: '1.3px',
                      overflow: 'hidden'
                    }} 
                      component={Logo}
                    
                    /> */}
                    &nbsp;
                    价格异常检测工具
                  </div>)
                }}
                location={{
                    pathname,
                }}
                // waterMarkProps={{
                //     content: 'Pro Layout',
                // }}
                menuFooterRender={(props) => {
                    return (
                        <></>
                        // <a
                        //     style={{
                        //         lineHeight: '48rpx',
                        //         display: 'flex',
                        //         height: 48,
                        //         color: 'rgba(255, 255, 255, 0.65)',
                        //         alignItems: 'center',
                        //     }}
                        //     href="https://preview.pro.ant.design/dashboard/analysis"
                        //     target="_blank"
                        //     rel="noreferrer"
                        // >
                        //     <img
                        //         alt="pro-logo"
                        //         src="https://procomponents.ant.design/favicon.ico"
                        //         style={{
                        //             width: 16,
                        //             height: 16,
                        //             margin: '0 16px',
                        //             marginRight: 10,
                        //         }}
                        //     />
                        //     {!props?.collapsed && 'Preview Pro'}
                        // </a>
                    );
                }}
                onMenuHeaderClick={(e) => console.log(e)}
                menuItemRender={(item, dom) => (
                    <a
                        onClick={() => {
                            setPathname(item.path || '/');
                            myNavigate(item.path || "/page1")
                        }}
                    >
                        {dom}
                    </a>
                )}
                subMenuItemRender={(item: any,dom: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
                    return (<div
                        
                        onClick={() => {
                            setPathname(item.path || '/');
                            myNavigate(item.path || "/page1")
                        }}
                    >
                        {dom}
                    </div>)
                }}
                rightContentRender={() => (
                    <div>
                        {/* <Avatar shape="square" size="small" icon={<UserOutlined />} /> */}
                    </div>
                )}
                {...settings}
            >
                <PageContainer
                    // content={content}
                    // tabList={[
                    //     {
                    //         tab: '基本信息',
                    //         key: 'base',
                    //     },
                    //     {
                    //         tab: '详细信息',
                    //         key: 'info',
                    //     },
                    // ]}
                    // extraContent={
                    //     <Space size={24}>
                    //         <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    //         <Statistic title="Unmerged" value={93} suffix="/ 100" />
                    //     </Space>
                    // }
                    // extra={[
                    //     <Button key="3">操作</Button>,
                    //     <Button key="2">操作</Button>,
                    //     <Button key="1" type="primary">
                    //         主操作
                    //     </Button>,
                    // ]}
                    // footer={[
                    //     <Button key="3">重置</Button>,
                    //     <Button key="2" type="primary">
                    //         提交
                    //     </Button>,
                    // ]}
                >
                    <div
                        style={{
                            height: '120vh',
                        }}
                    >
                        {element}
                        {/* <Result
                            status="404"
                            style={{
                                height: '100%',
                                background: '#fff',
                            }}
                            title="Hello World"
                            subTitle="Sorry, you are not authorized to access this page."
                            extra={<Button type="primary">Back Home</Button>}
                        /> */}
                    </div>
                </PageContainer>
            </ProLayout>
            {/* <SettingDrawer
                pathname={pathname}
                enableDarkTheme
                getContainer={() => document.getElementById('test-pro-layout')}
                settings={settings}
                onSettingChange={(changeSetting) => {
                    setSetting(changeSetting);
                }}
                disableUrlParams={false}
            /> */}
        </div>
    );
};
