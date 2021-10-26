import React from 'react';
// import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import { useAppSelector, useAppDispatch } from './Store';
import { signIn } from './LoginRedux';
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
    //var registered = useSelector((state: any) => state.registration.value)
    return (
        <div>
            <h1 className="Title">Sign Up for Free!</h1>
            <div className="FormDiv">
                <form className="Form">

                </form>
            </div>
        </div>
    )
}