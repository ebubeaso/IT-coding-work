import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {Main, Tables} from '../../src/App';
import {Header} from '../../src/Header';

describe("rendering components", () => {
    it("render without failing", () => {
        render(<Main/>);
    })
    test("Render the table component", () => {
        render(<Tables/>)
    });
    test("Render the Header component", () => {
        render(<Header/>)
    });
})