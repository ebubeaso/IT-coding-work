import React, {useState} from "react";
import validCheck from "./formValidator";
const Form: React.FC = () => {
    // this is my custom react hook (validate = function to check form validity)
    const useForm = (validate:any) => {
        // set the initial state for the form
        var [theInputs, setInputs] = useState({
            firstname: "", lastname: "", username: "", password: "", confirm: ""
        });
        // set the initial state of the form error messages
        var [errors, setErrors] = useState({
            firstname: "", lastname: "", username: "", password: "", confirm: ""
        });
        // catch any changes happening on the form
        const changes = (e: any) => {
            // destructuring the name and value from e.target (looks cleaner)
            // this is the same as e.target.name and e.target.value
            var {name, value} = e.target; // The target element event
            setInputs({...theInputs, [name]: value});
        }
        // recognize the form submission (checks if the form is valid)
        const formSubmission = () => {
            setErrors(validate(theInputs));
            let valid: string | boolean = "";
            // gets the input values and puts them to an array
            let formInputs = Object.values(theInputs);
            // gets the form errors and puts them into an array
            let errorInputs = Object.values(errors);
            for (let val of errorInputs) {
                // looks for these error keywords in the errorInputs
                if (val.includes("Please") || val.includes("Password")) {
                    valid = false;
                }
            }
            if (formInputs.includes("") == false && theInputs.password == theInputs.confirm) {
                // double check password (for a capital letter, a number and for a special character)
                if (theInputs.password.length >= 8 && /[A-Z]/.test(theInputs.password) && 
                /[\! || \? || \@ || \$ || \% || \*]/.test(theInputs.password) 
                && /\d/.test(theInputs.password)) {
                    valid = true;
                }
            };
            if (valid) {
                alert("Your form submittal was a success!!");
                window.location.reload();
            }
        }
        return {changes, theInputs, errors, formSubmission}
    }
    // pull in the custom hook below
    const {changes, theInputs, errors, formSubmission} = useForm(validCheck);
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
            <div className="FormDiv">
            <form className="Form">
                {errors.firstname && <p className="Invalid">{errors.firstname}</p> }
                <label htmlFor="firstname" className="FormLabel">First Name</label>
                <input id="firstname" type="text" name="firstname" className="FormInput"
                    value={theInputs.firstname} onChange={changes} />

                {errors.lastname && <p className="Invalid">{errors.lastname}</p>}
                <label htmlFor="lastname" className="FormLabel">Last Name</label>
                <input id="lastname" type="text" name="lastname" className="FormInput"
                    value={theInputs.lastname} onChange={changes} />

                {errors.username && <p className="Invalid">{errors.username}</p>}
                <label htmlFor="username" className="FormLabel">Username</label>
                <input id="username" type="text" name="username" className="FormInput"
                    value={theInputs.username} onChange={changes} />

                {errors.password && <p className="Invalid">{errors.password}</p>}
                <label htmlFor="password" className="FormLabel">Password</label>
                <input id="password" type="password" name="password" className="FormInput"
                    value={theInputs.password} onChange={changes} />
                    
                {errors.confirm && <p className="Invalid">{errors.confirm}</p>}
                <label htmlFor="confirm" className="FormLabel">Confirm Password</label>
                <input id="confirm" type="password" name="confirm" className="FormInput"
                    value={theInputs.confirm} onChange={changes} />
            </form>
            <button className="SubmitButton" id="submit" onClick={formSubmission}>Register!</button>
            </div>
        </div>
    )
}
export default Form;