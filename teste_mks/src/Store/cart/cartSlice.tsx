import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
  amount: number;
}

const INITIAL_STATE: CartProduct[] = [];

const cartSlice = createSlice({
  name: "cartList",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart(state, { payload }: PayloadAction<any>) {
      const index = state.findIndex((element) => element.id === payload.id);
      if (index === -1) {
        return [...state, { ...payload, amount: 1 }];
      } else {
        state[index].amount += 1;
      }
    },
    removeOne(state, { payload }: PayloadAction<any>) {
      const index = state.findIndex((element) => element.id === payload.id);
      if (state[index].amount > 0) {
        state[index].amount -= 1;
      }
      if (state[index].amount === 0) {
        state.splice(index, 1);
      }
    },
    removeAll(state, { payload }: PayloadAction<any>) {
      const index = state.findIndex((element) => element.id === payload.id);
      state.splice(index, 1);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeAll, removeOne } = cartSlice.actions;
export const useCart = (state: any) => {
  return state.cart as CartProduct[];
};
