import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comp from './tools/CompTheme';
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
// redux 的相关准备
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <BrowserRouter>
    <React.StrictMode>
      <App></App>
    </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
