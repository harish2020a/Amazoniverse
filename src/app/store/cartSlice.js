import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => action.payload.id === item.id
      );
      if (index !== -1) {
        state.items[index].qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload
      );

      state.items.splice(index, 1);
    },
    increaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      state.items[index].qty += 1;
    },
    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (state.items[index].qty > 1) {
        state.items[index].qty -= 1;
      }
    },
    setQuantity: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (action.payload.value <= 1) state.items[index].qty = 1;
      else {
        state.items[index].qty = action.payload.value;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.qty, 0);

export default cartSlice.reducer;
