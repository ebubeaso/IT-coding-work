import React, { useState } from 'react';

// this variable is what is going to receive the fetch API query results
var result: any = "";
export var queryUrl: string = "";
export const AccessCode: React.FC | any = () => {
    // my state management variables
    var [clientId, setClientId] = useState("");
    var [secret, setSecret] = useState("");
    var [user, setUser] = useState("");
    var [passwd, setPasswd] = useState(""); 
    var [login, setLogin] = useState<string | boolean>("");

    // this function makes the API query for the Bullhorn API authentication
    const getCode = () => {
        if (clientId == "" || secret == "" || user == "" || passwd == "") {
            alert("Please fill out the login form completely.");
            return;
        }
        console.log(clientId);
        let content = {clientID: clientId, clientSecret: secret, username: user, password: passwd};
        let link = "http://10.0.0.31:5555/authenticate"
        setLogin(false);
        fetch(link, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
                },
            body: JSON.stringify(content)
        }).then(response => {
            if (response.status !== 200) {
                alert("Please enter in valid credentials");
                return;
            }
            return response.json()
        }).then(data => {
            result = data;
            queryUrl = result["restUrl"];
            console.log(queryUrl);
            setLogin(true);
        }).catch(err => {
            alert(err);
            setLogin("")
        });
        return result;
    }
    if (login === "") {
        return (
        <div className="Content">
            <h1 className="Title">Login to Use Web App</h1>
            <h3 className="Subtitle">Authenticate below with your API credentials</h3>
            <div className="LoginDiv">
            <form className="Login">
                <label htmlFor="clientID" className="FormLabel">Client ID</label>
                <input type="text" name="clientID" id="clientID" 
                    value={clientId} onChange={(e) => setClientId(e.target.value)} />
                
                <label htmlFor="clientSecret" className="FormLabel">Client Secret</label>
                <input type="text" name="clienSecret" id="clientSecret" 
                    value={secret} onChange={(e) => setSecret(e.target.value)} />

                <label htmlFor="username" className="FormLabel">Username</label>
                <input type="text" name="username" id="username" 
                    value={user} onChange={(e) => setUser(e.target.value)} />

                <label htmlFor="password" className="FormLabel">Password</label>
                <input type="password" name="password" id="password"
                    value={passwd} onChange={(e) => setPasswd(e.target.value)} />
            </form>
            <button id="submit-login" onClick={() => {setTimeout(getCode, 200)}}>Login</button>
            </div>
        </div>
    )}
    return login ? <RestToken /> : <h1 className="Title">Loading, please wait...</h1>
}

export const RestToken: React.FC | any = () => {
    const authenticated: JSX.Element = (
        <p className="Paragraph">
            You can now use the search feature! Go to the Search page and
            use this Bullhorn Rest Token to prove you are authorized to run
            this web application.
        </p>
    )
    const notAuthenticated: JSX.Element = (
        <p className="Paragraph">
            Sorry, but the information that you entered was not correct.
            Please try again and login with the correct information.
        </p>
    )
    return (
        <div className="Content">
        { 
        (result["BhRestToken"]) ? <h1 className="Title">Authentication Successful</h1> : <h1 className="Title">Authentication Failed</h1>
        }
        {(result["BhRestToken"]) ? <h3 className="Subtitle">Here is your Bullhorn Rest Token</h3> : null}
        {(result["BhRestToken"]) ? authenticated : notAuthenticated}
            <p className="Paragraph">
                Bullhorn RestToken: {(result["BhRestToken"]) ? result["BhRestToken"] : null}
            </p>
        </div>
    )
}

function e(e: any): any {
    throw new Error('Function not implemented.');
}
