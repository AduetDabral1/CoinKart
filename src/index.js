import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import 'antd/dist/antd.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from './App';
import store from './app/store'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router>
    <Provider store={store}>
        <App/>
    </Provider>
</Router>);

// ReactDOM.render(
//     <Router>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </Router>, document.getElementById('root'));