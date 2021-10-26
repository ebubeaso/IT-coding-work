
import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import registrationReducer from "./RegisterRedux";
import loginReducer from "./LoginRedux";
export const authStore = configureStore({
    reducer: {
        registration: registrationReducer,
        login: loginReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof authStore.getState>
export type AppDispatch = typeof authStore.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector