import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../YupLibrary/UserSlice";

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
});