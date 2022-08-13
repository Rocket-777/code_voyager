import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {Main} from "./main";
import {BrowserRouter} from "react-router-dom";
import './main/mainStyles.css'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </React.StrictMode>
,
  document.getElementById('root')
);


reportWebVitals();
