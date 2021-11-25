
import { createSlice} from "@reduxjs/toolkit";
import type { RootState } from "./Store"
// make the interface
interface AuthState {
    value: {username: string, password: string}
}
var initialState: AuthState = {value: {username: "", password: ""}}
export var loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.value = action.payload;
        }
    }
})
// export the name of the reducer function & map it to the slice's actions
export const {signIn} = loginSlice.actions;

export const getAuth = (state: RootState) => state.login.value;
export default loginSlice.reducer;