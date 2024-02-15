import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("product/gatAllmovie", async () => {
  let data = await axiosInstance.get("https://dummyjson.com/products");
  console.log(data.data.products)
  return data.data.products;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    fav: [],
    products: [],
    loading: true,
    err: false,
  },
  reducers: {
    addToFav: (state, action) => {
      state.fav.push({ ...action.payload, quantify: 1 });
    },
    remv:(state,action)=>{
      return {
        ...state,
        fav: state.fav.filter(item => item.id !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getProduct.pending, (state) => {
            console.log("pending")
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(getProduct.rejected, (state, action) => {
            console.log("rejected")
            state.loading = false;
            state.err = true;
        });
},

});

export const { addToFav } = productSlice.actions;
export const { remv } = productSlice.actions;
export default productSlice.reducer;