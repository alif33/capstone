import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    products: null,
    cart: []
  },
  reducers: {
    setProducts: (state, action) =>{
      const products = action.payload?.products || false
      if (products) {
        state.products = products
      }
    },
    addToCart: (state, action) =>{
      const { name, image, price } = action.payload
      if (name && image && price) {
        state.cart.push({
          name,
          image,
          price
        })
      }
     
    },
    LogedIn: (state, action) => {
      return {
        ...state,
        auth: {},
      };
    },
  },
});
