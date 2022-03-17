import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AbnormalInfo from './pages/AbnormalInfo';
import BaseInfoOne from './pages/BaseInfoOne';
import BaseInfoTwo from './pages/BaseInfoTwo';

import { Themes } from './tools/position';


interface AppProps {

}
interface AppState {

}
class App extends Component<AppProps, AppState>{
    public constructor(props: AppProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<BaseInfoOne  />} />
                    <Route path="/two" element={<BaseInfoTwo />} />
                    <Route path='/three' element={<AbnormalInfo />}></Route>
                </Routes>
            </div>
        )
    }
}
export default App;

