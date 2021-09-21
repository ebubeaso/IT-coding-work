import { shallow, configure } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from "../../src/Form";
//configure the adapter
configure({adapter: new Adapter()});

it("Form component", () => {
    let component = shallow(<Form/>);
    expect(component.contains(<h1 className="Title">Form Validation Practice</h1>))
        .toBeTruthy();
});

it("Test the initial button click", () => {
    let component = shallow(<Form/>);
    component.find("#submit").simulate("click"); //button click
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>)
    ).toBeTruthy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>)
    ).toBeTruthy();
    expect(component.contains(
        <p className="Invalid">* Please enter in a username</p>)
    ).toBeTruthy();
    // this is for the password
    let passwd = "* Invalid password: Your password needs to be:\n" 
    passwd += "- At least 8 characters long\n"
    passwd += "- Have at least one capital letter\n"
    passwd += "- At least one number\n"
    passwd += "- At least one special character (!, ?, @, $, %, *)"
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeTruthy();
    expect(component.contains(
        <p className="Invalid">Please enter data below</p>
    )).toBeTruthy();
});

it("test the first name", () => {
    let component = shallow(<Form/>);
    // add in a username
    component.find("#firstname").simulate("change", {target: {
        name: "firstname", value: "Ebube"
    }});
    component.find("#submit").simulate("click"); //button click
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>)
    ).toBeTruthy();
    expect(component.contains(
        <p className="Invalid">* Please enter in a username</p>)
    ).toBeTruthy();
    // this is for the password
    let passwd = "* Invalid password: Your password needs to be:\n" 
    passwd += "- At least 8 characters long\n"
    passwd += "- Have at least one capital letter\n"
    passwd += "- At least one number\n"
    passwd += "- At least one special character (!, ?, @, $, %, *)"
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeTruthy();
});

it("test the last name", () => {
    let component = shallow(<Form/>);
    component.find("#lastname").simulate("change", {target: {
        name: "lastname", value: "Aso"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>)
    ).toBeTruthy();
});

it("test the username", () => {
    let component = shallow(<Form/>);
    component.find("#username").simulate("change", {target: {
        name: "username", value: "ebubeaso"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">* Please enter in a username</p>
    )).toBeFalsy();  
});

it("test the password", () => {
    let component = shallow(<Form/>);
    // a simple word
    component.find("#password").simulate("change", {target: {
        name: "password", value: "apple"
    }});
    component.find("#submit").simulate("click");
    let passwd = "* Invalid password: Your password needs to be:\n" 
    passwd += "- At least 8 characters long\n"
    passwd += "- Have at least one capital letter\n"
    passwd += "- At least one number\n"
    passwd += "- At least one special character (!, ?, @, $, %, *)"
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeTruthy();
    // password with a capital letter
    component.find("#password").simulate("change", {target: {
        name: "password", value: "Pizzapie"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeTruthy();
    // password with a capital letter and number
    component.find("#password").simulate("change", {target: {
        name: "password", value: "Asoebube93"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeTruthy();
    // password with a capital letter, number and special character
    component.find("#password").simulate("change", {target: {
        name: "password", value: "Asoebube93?"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeFalsy();
});

it("test the password confirmation", () => {
    let component = shallow(<Form/>);
    component.find("#password").simulate("change", {target: {
        name: "password", value: "Asoebube93?"
    }});
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">The passwords do not match</p>
    )).toBeTruthy();
});

it("test the first and last name", () => {
    let component = shallow(<Form/>)
    component.find("#firstname").simulate("change", {target: {
        name: "firstname", value: "Ebube"
    }})
    component.find("#lastname").simulate("change", {target: {
        name: "lastname", value: "Aso"
    }})
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>)
    ).toBeFalsy();
})
it("test the first, last, username", () => {
    let component = shallow(<Form/>)
    component.find("#firstname").simulate("change", {target: {
        name: "firstname", value: "Ebube"
    }})
    component.find("#lastname").simulate("change", {target: {
        name: "lastname", value: "Aso"
    }})
    component.find("#username").simulate("change", {target: {
        name: "username", value: "ebubeaso"
    }})
    component.find("#submit").simulate("click");
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in a username</p>
    )).toBeFalsy();  
});

it("test all validated", () => {
    // this code will fill in for the window alert 
    // Regular window alerts aren't implemented in jsdom
    window.alert = jest.fn();
    /* mocking window reload (this just removes window.location
        and makes it a mock function instead) */
    delete window.location;
    window.location = { reload: jest.fn() };

    let component = shallow(<Form/>)
    component.find("#firstname").simulate("change", {target: {
        name: "firstname", value: "Ebube"
    }})
    component.find("#lastname").simulate("change", {target: {
        name: "lastname", value: "Aso"
    }})
    component.find("#username").simulate("change", {target: {
        name: "username", value: "ebubeaso"
    }})
    component.find("#password").simulate("change", {target: {
        name: "password", value: "AppleP!e2021"
    }});
    component.find("#confirm").simulate("change", {target: {
        name: "confirm", value: "AppleP!e2021"
    }});
    component.find("#submit").simulate("click");
    let passwd = "* Invalid password: Your password needs to be:\n" 
    passwd += "- At least 8 characters long\n"
    passwd += "- Have at least one capital letter\n"
    passwd += "- At least one number\n"
    passwd += "- At least one special character (!, ?, @, $, %, *)"
    expect(component.contains(
        <p className="Invalid">{passwd}</p>)
    ).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your last name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in your first name</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">* Please enter in a username</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">The passwords do not match</p>
    )).toBeFalsy();
    expect(component.contains(
        <p className="Invalid">Please enter data below</p>
    )).toBeFalsy();
    // call window alert and window location
    expect(window.alert).toBeCalledWith('Your form submittal was a success!!');
    expect(window.location.reload).toHaveBeenCalled();
})
/* it("test the first, last, username and password", () => {
    
})

it("test the username and password", () => {
    
})
it("test the empty password confirmation", () => {
    
})
*/