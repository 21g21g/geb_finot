import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice"
import countReducer from "./countSlice"

const store=configureStore({
    reducer:{
        country:countryReducer,
        count:countReducer
    }
})

export default store