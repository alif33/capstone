import { combineReducers } from "@reduxjs/toolkit";
import { shopSlice } from "./shop/slice";

export const rootReducer = combineReducers({
  shop: shopSlice.reducer,
});
