import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
  items: [],
  status: null,
  error:null,
}

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/products")
      return response?.data
    } 
    catch (error) {
      return rejectWithValue("An error occuredddddd");
    }
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
      state.error = action.payload
    })



  }

})

export default productsSlice.reducer