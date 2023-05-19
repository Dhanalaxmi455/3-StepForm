import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name : "Form1Details",
    initialState : {
        form1 : {},
        form2 : {},
        form3 : {}
    },
    reducers : {
        Form1Data : (state, action)=>{
            state.form1 = action.payload;
        },
        Form2Data : (state, action)=>{
            state.form2 = action.payload;
        },
        Form3Data : (state, action)=>{
            state.form3 = action.payload;
        }
    }
})

export const {Form1Data, Form2Data, Form3Data} = FormSlice.actions
export default FormSlice;