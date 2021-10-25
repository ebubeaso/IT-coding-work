
import { createSlice } from "@reduxjs/toolkit";
export var login = createSlice({
    name: "login",
    initialState: {
        value: {usename: "", password: ""}
    },
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload;
        }
    }
})
export const {signIn} = login.actions;
export default login.reducer;