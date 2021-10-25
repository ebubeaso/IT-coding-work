import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import registrationReducer from "./RegisterRedux";
import loginReducer from "./LoginRedux";
import { Header } from './App';

const authStore = configureStore({
    reducer: {
        registration: registrationReducer,
        login: loginReducer
    }
})
render(
    <React.StrictMode>
        <Provider store={authStore}>
            <Header/>
        </Provider>
    </React.StrictMode>
, document.getElementById("root"));