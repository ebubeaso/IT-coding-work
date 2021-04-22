// now to do the test code
import React from 'react';
import { cleanup, render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as d3 from 'd3';
import App from './index';
import Graph from './graph';

describe("Render the graph", () => {
    beforeEach(cleanup);
    it("renders without crashing", () => {
        render(<App />);
    });
    it("renders without crashing", () => {
        render(<Graph />);
    });
});
it("simulate a button click", () => {
    // simulate a button click
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Click to load the graph"));
    expect(document.getElementById("graph")).toBeTruthy();
});

