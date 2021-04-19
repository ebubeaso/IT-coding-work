"use strict";
// This is the main part of the frontend
class Home extends React.Component {
    render() {
        return (
            <div>
            <h1 className="Title">React Database Frontend Test</h1>
            <h2 className="Subtitle">About this Project</h2>
            <br />
            <p className="Explanation">
                This is a simple project of mine that has a login page and a table of
                data that came from a database backend. This is a simple project to 
                connect a React frontend with a Python Flask/Gunicorn app server backend.
                This is going to be pretty cool!
             </p>
            </div>
        )
    };
};
var auth_token = "";

class GetTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {authorized: false}
        // we want to bind the send token function to this component
        this.sendToken = this.sendToken.bind(this);
    }

    // helper function
    sendToken() {
        // get the auth token
        auth_token = document.getElementById("token").value;
        fetch("http://10.0.0.192:5000/authorize", {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify( {token: auth_token} )
        }).then(response => response.json())
        .then(data => {
            let check = data;
            if (check.message.includes("authorized")) {
                this.setState({authorized: true});
            } else {
                alert("You passed in an incorrect token!!")
            }
        })
        .catch(error => console.log(error));
    }

    render() {
        return this.state.authorized ? <Table /> : <div className="Token-form">
                                        <TableForm />
                                        <input type="button" id="submit-token" value="Submit Token" onClick={this.sendToken} /></div>
    }
}

class TableForm extends React.Component {
    render() {
        return (
            <div className="Auth">
                <h2 className="Subtitle">Enter in the authorization token to see this page</h2>
                <form id="auth-form" className="Auth">
                    <input type="password" name="token" id="token" placeholder="Auth Token"/>
                </form>
            </div>
        )
    }
};

class Login extends React.Component {
    sendLogin() {
        //This gets the login information
        let user = document.getElementById("username").value;
        let passwd = document.getElementById("password").value;
        fetch("http://10.0.0.192:5000/login", {
            method: "POST",
            headers: {"Accept": "application/json", "Content-Type": "application/json"},
            body: JSON.stringify( {username: user, password: passwd} )
        }).then(response => response.json())
        .then(data => {
            let d = data;
            alert(d["Message"] + "\n Access token: " + d["Access Token"] + "\n Refresh token: " + d["Refresh Token"]);
        })
        .catch(error => console.log(error))
    };
    render() {
        return (
            <div>
            <h2 className="Form-title">Please Login Below</h2>
            <form id="the-form" className="the-form">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" />
                <label for="username">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <input type="button" id="submit-login" value="Login" onClick={this.sendLogin} />
            </form>
            </div>
        )
    };
};