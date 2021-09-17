import React from "react";
const Form: React.FC = () => {
    return (
        <div>
            <h1 className="Title">Form Validation Practice</h1>
            <p className="Paragraph">
                I am making this React page to get a better hang of doing
                form validation in my web applications. This is good for
                making signup forms or for getting specific information from
                the user and ensuring that the information provided from the 
                client/user complies with what the signup form is looking for.
            </p>
            <form className="Form">
                <label htmlFor="firstname" className="FormLabel">First Name</label>
                <label htmlFor="lastname" className="FormLabel">Last Name</label>
                <label htmlFor="username" className="FormLabel">Username</label>
                <label htmlFor="password" className="FormLabel">Password</label>
                <label htmlFor="confirm" className="FormLabel">Confirm Password</label>
            </form>
        </div>
    )
}
export default Form;