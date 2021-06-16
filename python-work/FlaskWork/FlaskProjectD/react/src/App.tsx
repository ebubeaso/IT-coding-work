import React from 'react';
import {Title} from './Styling';

export const Main: React.FC = () => {
    return <Title>Hello there sport!</Title>
}
export const Exotics: React.FC = () => {
    return (
        <div className="Content">
            {/* <h1 className="Title">Main Table</h1> */}
            <Title>I am the Exotics Table</Title>
        </div>
    )
}