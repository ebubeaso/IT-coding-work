import React from 'react';
import {render} from "@testing-library/react";
import {Main} from '../../src/App';

describe("rendering components", () => {
    it("render without failing", () => {
        render(<Main/>);
    })
})