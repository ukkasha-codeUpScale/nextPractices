import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    clicked : number;
}

const initialState : CounterState = {
    value: 0,
    clicked: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment : (state) => {
            state.value += 1,
            state.clicked += 1
        },
        decrement : (state) => {
            state.value -= 1
            state.clicked += 1
        },
        incrementByValue : (state, action : PayloadAction<number>) => {
            state.value += action.payload
            state.clicked += 1
        },
        reset : (state) => {
            state.value = 0
            state.clicked += 1
        }
    }
})

export const { increment, decrement, incrementByValue, reset } = counterSlice.actions;
export default counterSlice.reducer; 