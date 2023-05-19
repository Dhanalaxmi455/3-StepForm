import { configureStore } from "@reduxjs/toolkit";
import FormSlice from "./slice/formSlice";

const store = configureStore({
    reducer : {
        Form1data : FormSlice.reducer,
    }
})

export default store;