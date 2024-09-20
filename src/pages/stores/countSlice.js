import { createSlice } from "@reduxjs/toolkit";
 const initialState={
        count:0,

    }
const countSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increase(state,action){
            state.count+=action.payload
        }
    }
   
})
export const counterSliceAction=countSlice.actions
export default countSlice.reducer