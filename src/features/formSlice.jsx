import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        data: {},
    },
    reducers: {
        updateFormData: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
    },
});
export const { updateFormData } = formSlice.actions;
export default formSlice.reducer
