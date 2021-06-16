'use strict';
// This will have some of our styled components here
import React from 'react';
import styled, {css} from 'styled-components';

export const Title = styled.h1`
    color: maroon;
    font-family: Helvetica;
    text-align: center;
    font-size: 42pt;
`;
export const sharedDisplay = css`
    display: flex;
`;
export const TheHeader = styled.header`
    ${sharedDisplay}
    padding: 1%;
    flex-direction: column;
    background: linear-gradient(to right, navy, steelblue);
    width: 100%;
    margin-left: -10px;
`;
export const Ul = styled.ul`
    ${sharedDisplay};
`;
export const NavLinks = styled.a`
    font-size: 20pt;
    text-decoration: none;
    color: whitesmoke;
`;
export const NavList = styled.li`
    list-style-type: none;
    margin-right: 4%;
    color: white;
`;
