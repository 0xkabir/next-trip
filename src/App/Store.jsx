import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/Authentication/AuthSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});


export default store;