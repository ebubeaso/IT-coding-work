import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Header } from './App';
import {authStore} from "./Store";
render(
    <React.StrictMode>
        <Provider store={authStore}>
            <Header/>
        </Provider>
    </React.StrictMode>
, document.getElementById("root"));