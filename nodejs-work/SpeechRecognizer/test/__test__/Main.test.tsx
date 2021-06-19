import React from 'react';
import {render} from "@testing-library/react";
import {App} from '../../src/App';

describe("Testing the main app component of my speech recognizer", () => {
    it("Render without failing", () => {
        render(<App/>);
    })
})