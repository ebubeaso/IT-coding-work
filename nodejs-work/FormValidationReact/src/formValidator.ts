// this file will use the setup for form validation when I make the custom hook
export default function validCheck(values: any) {
    let formErrors = {
        firstname: "", lastname: "", username: "", password: "", confirm: ""
    }
    // Now to check the form validation
    if (values.firstname.length == 0) {
        formErrors.firstname = "* Please enter in your first name";
    }
    if (values.lastname.length == 0) {
        formErrors.lastname = "* Please enter in your last name";
    }
    if (values.username.length == 0) {
        formErrors.username = "* Please enter in a username";
    }
    if (values.password.length < 8 || !/[A-Z]/.test(values.password) || 
    !/[\! || \? || \@ || \$ || \% || \*]/.test(values.password) 
    || !/\d/.test(values.password)) {
        formErrors.password = "* Invalid password: Your password needs to be:\n" 
        formErrors.password += "- At least 8 characters long\n"
        formErrors.password += "- Have at least one capital letter\n"
        formErrors.password += "- At least one number\n"
        formErrors.password += "- At least one special character (!, ?, @, $, %, *)"
    }
    if (values.confirm.length == 0) {
        formErrors.confirm = "Please enter data below"
    }
    if (values.confirm != values.password) {
        formErrors.confirm = "The passwords do not match"
    }
    return formErrors;
}