import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
// make the slices for the form page
interface RegisterState {
    value: {firstName: string, lastName: string, username: string, email: string,
        password: string, confirmPassword: string}
}
// get the initial state
var initialState: RegisterState = {value: {firstName: "", lastName: "", 
username: "", email: "", password: "", confirmPassword: ""}}
export var registration = createSlice({
    name: "registration",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const {addUser} = registration.actions;
export default registration.reducer; 