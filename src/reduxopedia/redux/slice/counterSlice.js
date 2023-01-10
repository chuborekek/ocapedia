import { createSlice } from "@reduxjs/toolkit"
import { resetApp } from "../action/action"

const initialState={count:0}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:state=>{state.count--},
        incrementMultiplier:(state,action)=>{
            state.count=state.count + Number(action.payload.multiplier)
        },
        decrementMultiplier:(state,action)=>{
            state.count=state.count- Number(action.payload.multiplier)
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(resetApp,(state,action)=>{
            state.count = 0
        })
    },
})

export const {increment,decrement,incrementMultiplier,decrementMultiplier,resetCounter} = counterSlice.actions
export const counterReducer = counterSlice.reducer
