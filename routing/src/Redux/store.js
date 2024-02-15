
import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./slices/productSlice"
export const Store=configureStore({
    reducer:{
        productReducer
    }
})