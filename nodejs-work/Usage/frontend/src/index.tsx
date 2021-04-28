'use strict';
import { Header } from './header';
import React from 'react';
import ReactDOM from 'react-dom';

export const App: React.FC = () => {
    return <Header/>;
}
ReactDOM.render(<App />, document.getElementById("main"));