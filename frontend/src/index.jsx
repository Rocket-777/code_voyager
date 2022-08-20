import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {Main} from "./main";
import {BrowserRouter} from "react-router-dom";
import './main/mainStyles.css'

import store from './store'
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </Provider>

    </React.StrictMode>
,
  document.getElementById('root')
);


reportWebVitals();
