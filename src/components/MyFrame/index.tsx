import React from 'react'

interface MyFrameProps{

}

// export default function MyFrame(props:MyFrameProps) {
//   return (
//     <div style={{
//       width:"100%",
//       height:"100%"
//     }}>
        
//     </div>
//   )
// }
export default function MyFrame(WrappedComponent:any) {
  return function HOC(){
      return <div
        className='hoc-test'
        style={{
          width:"100%",
          height:"100%"
        }}
      >
        {/* <div className="demo-header">
          我是标题
        </div> */}
        <WrappedComponent/>
      </div>
    
  }
}