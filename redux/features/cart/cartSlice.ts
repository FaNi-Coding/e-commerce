import { CategoryProductProps } from '@/constants/types/categoryProductTypes';
import { createSlice } from '@reduxjs/toolkit';

type cartState = {
    cart: CategoryProductProps;
  };
  
  const initialState: cartState = {
    cart: [],
  } 

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.amount++;
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }
    },
    incrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item)
      item.amount++;
    },
    decrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if(item)
      if (item.amount === 1) {
        item.amount = 1
      } else  {
        item.amount--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;
