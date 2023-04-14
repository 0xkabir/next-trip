import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Authentication/AuthSlice";

const store = configureStore({
    reducer: {
        users: authSlice,
    },
});


export default store;