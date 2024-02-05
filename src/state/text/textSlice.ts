import { createSlice } from "@reduxjs/toolkit";

interface TextState {
    value: string;
}

const initialState: TextState = {
    value: "Set from first or last name..",
}

const textSlice = createSlice({
    name: "text",
    initialState,
    reducers:{
        firstName : (state) => {
            state.value = "Ukkasha";
        },
        lastName : (state) => {
            state.value =  "Mehmood";
        }
    }
})

export const { firstName, lastName } = textSlice.actions;
export default textSlice.reducer;
