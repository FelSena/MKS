import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductsList";

const INITIAL_STATE: Product[] = [];

const cartSlice = createSlice({
  name: "cartList",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, { payload }: PayloadAction<Product>) {
      return [...state, payload];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export const useCart = (state: any) => {
  return state.cart as Product[];
};
