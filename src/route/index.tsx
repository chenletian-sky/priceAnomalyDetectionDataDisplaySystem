//路由表配置：src/routes/index.js
// import About from '../pages/About'
// import Home from '../pages/Home'
import ProCard from '@ant-design/pro-card'
import {Navigate} from 'react-router-dom'
import AbnormalInfo from '../pages/AbnormalInfo'
import BaseInfoOne from '../pages/BaseInfoOne'
import MyFisheyeDiagram from '../pages/BaseInfoOne/components/myFisheyeDiagram'
import MyForceDirectedGraph from '../pages/BaseInfoOne/components/myForceDirectedGraph'
import MyMatrixView from '../pages/BaseInfoOne/components/myMatrixView'
import MyParallelCoordinateSystemDiagram from '../pages/BaseInfoOne/components/myParallelCoordinateSystemDiagram'
import BaseInfoTwo from '../pages/BaseInfoTwo'
import { Themes } from '../tools/position'


export default [
  // {
  //   path:'/home',
  //   element:
  // },
  {
    path:'/page1',
    element:<BaseInfoOne/>,
    children:[
      {
        path:'fisheye',
        element:<ProCard style={{height:"100%"}} children={<MyFisheyeDiagram theme={Themes.TestChartTheme}/>}/>
      },
      {
        path:'parallelLineChart',
        element:<ProCard style={{height:"100%"}} children={<MyForceDirectedGraph theme={Themes.TestChartTheme}/>}/>
      },
      {
        path:'forceGraph',
        element:<ProCard style={{height:"100%"}} children={<MyMatrixView theme={Themes.TestChartTheme}/>}/>
      }
    ]
  },
  {
    path:'/page2',
    element:<BaseInfoTwo/>,
    children:[
      {
        path: '',
      }
    ]
  },
  {
    path:'/page3',
    element:<AbnormalInfo/>,
    children:[
      {
        path:"",
      }
    ]
  }
]