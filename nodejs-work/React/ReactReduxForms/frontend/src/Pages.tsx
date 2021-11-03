import React from 'react';
// import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import { useAppSelector, useAppDispatch } from './Store';
import { signIn } from './LoginRedux';
import { addUser } from './RegisterRedux';
import 'regenerator-runtime/runtime';
export const Home: React.FC = () => {
    return (
        <div>
            <h1 className="Title">Welcome to the React Redux Form Page!</h1>
        </div>
    )
}
export const Data: React.FC = () => {
    return (
        <div>
        <h1 className="Title">This is where you will see the secret message</h1>
        </div>
    )
}
export const Login: React.FC = () => {
    React.useEffect(() => {
        if (authenticated.username != "" && authenticated.password != "") {
            auth();
        }
    })
    var authenticated = useAppSelector((state: any) => state.login.value);
    const dispatch = useAppDispatch();
    var user = ""; var passwd = "";
    const auth = () => {
        if (authenticated.username != "" && authenticated.password != "") {
            alert(`Username: ${authenticated.username}, 
            Password: ${authenticated.password}`)
        } else {
            alert("Please login")
        }
    }
    return (
    <div>
    <h1 className="Title">Login to Your Account</h1>
    <div className="FormDiv">
        <form className="Form">
            <label htmlFor="userlogin" className="FormLabel">Username</label>
            <input type="text" name="userlogin" id="userlogin" className="FormInput"
                placeholder="Username" onChange={(e) => {user = e.target.value}}/>
            
            <label htmlFor="userpassword" className="FormLabel">Password</label>
            <input type="password" name="userpassword" id="userpassword" 
                className="FormInput" placeholder="Password"
                onChange={(e) => {passwd = e.target.value}}/>
        </form>
        <button className="Submit" onClick={() => {
            let newData = {...authenticated, username: user, password: passwd}; 
            dispatch(signIn(newData));}}>Login!</button>
    </div>
    </div>
    )
}
export const Register: React.FC = () => {
    var newUser = useAppSelector((state: any) => state.registration.value)
    const dispatch = useAppDispatch();
    interface validInfo {
        validFirstName: boolean | string, validLastName: boolean | string,
        validUsername: boolean | string, validEmail: boolean | string,
        validPassword: boolean | string, validConfirm: boolean | string
    }
    let valid: boolean | string = "";
    var validated: validInfo = {
        validFirstName: "", validLastName: "", validUsername: "", 
        validEmail: "", validPassword: "", validConfirm: ""
    }
    React.useEffect(() => {
        let valid = validateSignup();
    })
    const validateSignup = ():boolean => {
        if (newUser.firstName == "") {

        }
        return true
    }
    // the initial variables (not using useState)
    var firstname = ""; var lastname = ""; var username = ""; 
    var password = ""; var confirmation = ""; var email = "";
    return (
    <div>
        <h1 className="Title">Sign Up for Free!</h1>
        <div className="FormDiv">
            <form className="Form">
                {(valid) ? null : <p className="Invalid"></p>}
                <label htmlFor="first-name" className="FormLabel">First Name</label>
                <input type="text" name="first-name" id="first-name"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {firstname = e.target.value}} />
                
                {(valid) ? null : <p className="Invalid"></p>}
                <label htmlFor="last-name" className="FormLabel">Last Name</label>
                <input type="text" name="last-name" id="last-name"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {lastname = e.target.value}} />

                {(valid) ? null : <p className="Invalid"></p>}  
                <label htmlFor="username" className="FormLabel">Username</label>
                <input type="text" name="username" id="username"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {username = e.target.value}} />

                {(valid) ? null : <p className="Invalid"></p>}
                <label htmlFor="email" className="FormLabel">Email Address</label>
                <input type="text" name="email" id="email"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {email = e.target.value}} />

                {(valid) ? null : <p className="Invalid"></p>}
                <label htmlFor="password" className="FormLabel">Password</label>
                <input type="text" name="password" id="password"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {password = e.target.value}} />

                {(valid) ? null : <p className="Invalid"></p>}
                <p className="Invalid"></p>    
                <label htmlFor="confirm" className="FormLabel">Confirm Password</label>      
                <input type="text" name="confirm" id="confirm"
                    className="FormInput" placeholder="Enter your first name"
                    onChange={(e) => {confirmation = e.target.value}} />
            </form>
        </div>
    </div>
    )
}