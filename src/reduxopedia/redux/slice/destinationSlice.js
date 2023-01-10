import { createSlice } from "@reduxjs/toolkit"; 
import { resetApp } from "../action/action";

export const initialState={
    destinations: [
        {
            name:"Hong Kong",
            days:7,
            fact:"longest elevator"
        },
        {
            name:"Japan",
            days:7,
            fact:"mostly mountains"
        },
        {
        name:"New Zealand",
        days:7,
        fact:"last country to be inhabited by human"
        },
    ],
    destinationSelected:null,
}

export const destinationSlice = createSlice({
    name:'destination',
    initialState,
    reducers:{
        destinationClicked:(state,action)=>{
            state.destinationSelected = action.payload.dest
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(resetApp,(state,action)=>{
            state.destinationSelected = null
        })
    },
}) 

export const {destinationClicked,resetDestination} = destinationSlice.actions
export const destinationReducer = destinationSlice.reducer