import {createSlice} from "@reduxjs/toolkit";

const initialState = {
items: [],
status:null
}

const productsSlice =  createSlice({
name:"products",
initialState,
reducer:{}

})

export default productsSlice.reducer