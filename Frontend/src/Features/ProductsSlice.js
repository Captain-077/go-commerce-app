import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    items: [],
    status: null
}

export const productsFetch = createAsyncThunk(
    "products/productsFetch",
   async() => {
       const response =  await axios.get("http://localhost:5000/productss")
       return response?.data
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducer: {},
    extraReducers: (builder) => {

        builder.addCase(productsFetch.pending, (state, action) => {
            state.status = "pending"
          })

          builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "sucess"
            state.items = action.payload
          })

          builder.addCase(productsFetch.rejected, (state, action) => {
            state.status = "rejected"
          })



    }

})

export default productsSlice.reducer