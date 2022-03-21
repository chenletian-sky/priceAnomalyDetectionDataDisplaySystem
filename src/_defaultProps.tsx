import React from 'react';
import { SmileOutlined, CrownOutlined, TabletOutlined, AntDesignOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/page1',
        name: '基础信息1',
        icon: <SmileOutlined />,
        routes:[
          {
            path:'/page1/fisheye',
            name:"鱼眼图"
          },
          {
            path:'/page1/parallelLineChart',
            name:"力导向图"
          },
          {
            path:'/page1/forceGraph',
            name:"矩阵视图"
          },
          
        ]
      },
      {
        path: '/page2',
        name: '基础信息2',
        icon: <CrownOutlined />,
        routes: [
          {
            path: '/admin/sub-page1',
            name: '一级页面',
            icon: <CrownOutlined />,
            component: './Welcome',
          }
        ],
      },
      {
        name: '异常展示',
        icon: <TabletOutlined />,
        path: '/page3',
        routes: [
          {
            path: '/page3/',
            name: 'test',
            icon: <CrownOutlined />,
          },
        ],
      },
      // {
      //   path: 'https://ant.design',
      //   name: 'Ant Design 官网外链',
      //   icon: <AntDesignOutlined />,
      // },
    ],
  },
  location: {
    pathname: '/page1',
  },
  // headerRender: false,
  // fixedHeader: false
};