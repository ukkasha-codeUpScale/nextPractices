import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import textReducer from "./text/textSlice";
import userProfileReducer from "./useprofile/userProfileSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        text : textReducer,
        userProofile : userProfileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
