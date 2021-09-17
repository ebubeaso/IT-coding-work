import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from "../../src/Form";
//configure the adapter
configure({adapter: new Adapter()});
it("Form component", () => {
    const component = shallow(<Form/>);
    expect(component.contains(<h1 className="Title">Form Validation Practice</h1>))
        .toBeTruthy();
})