import * as React from "react";
import * as ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import {Main} from "./modules/main";
import {BrowserRouter} from "react-router-dom";
import './modules/main/mainStyles.css'
import store from './reduxStore/store'
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
