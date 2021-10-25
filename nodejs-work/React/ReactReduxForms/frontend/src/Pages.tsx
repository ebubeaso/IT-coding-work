import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { login, signIn } from './LoginRedux';
export const Home: React.FC = () => {
    return (
        <div>
            <h1 className="Title">Welcome to the React Redux Form Page!</h1>
        </div>
    )
}
export const Data: React.FC = () => {
    return (
        <div></div>
    )
}
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    // React.useEffect(() => {}, [authenticated])
    var authenticated = useSelector((state: any) => state.login.value)
    var user = ""; var passwd = "";
    const auth = () => {
        console.log(authenticated)
        let theData = authenticated;
        console.log(theData);
        alert(`Username: ${theData.username}, Password: ${theData.password}`)
    }
    return (
    <div>
    <h1 className="Title">Login to Your Account</h1>
    <div className="FormDiv">
        <form className="Form">
            <label htmlFor="userlogin" className="FormLabel">Username</label>
            <input type="text" name="userlogin" id="userlogin" className="FormInput"
                defaultValue={authenticated.username} placeholder="Username"
                onChange={(e) => user = e.target.value}/>
            
            <label htmlFor="userpassword" className="FormLabel">Password</label>
            <input type="password" name="userpassword" id="userpassword" 
                className="FormInput" placeholder="Password" 
                defaultValue={authenticated.password} onChange={(e) => passwd = e.target.value}/>
        </form>
        <button className="Submit" onClick={() => {
            dispatch(signIn({username: user, password: passwd})); 
            auth()}}>Login!</button>
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