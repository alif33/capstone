import { shopSlice } from "./slice"
const { actions: slice } = shopSlice

export const setProducts = ({products}) => (dispatch) => {
  dispatch(slice.setProducts({products}))
}
export const addToCart = (data) => (dispatch) => {
  dispatch(slice.addToCart(data))
}

export const adminLogin = (__a__) => (dispatch) => {
  dispatch(slice.LogedIn(__a__))
}
