import { createSlice } from "@reduxjs/toolkit";
// make the slices for the form page
export var registration = createSlice({
    name: "registration",
    initialState: {
        value: {firstName: "", lastName: "", username: "", email: "",
        password: "", confirmPassword: ""}
    },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const {addUser} = registration.actions;
export default registration.reducer; 