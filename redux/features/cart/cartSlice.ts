import { CategoryProductProps } from '@/constants/types/categoryProductTypes';
import { products } from '@/data/data';
import { createSlice } from '@reduxjs/toolkit';

export type CartType = {
  id: string;
  name: string;
  img: string;
  price: number;
  amount: number;
}[];

type cartState = {
    cart: CartType;
  };
  
  const initialState: cartState  = {
    cart: []
  }
  

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      const availableProduct = products.find((product) => product.id === action.payload.id);
    
      if (itemInCart) {
        if (availableProduct && itemInCart.amount + 1 <= availableProduct.amount) {
          itemInCart.amount++;
        }
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    incrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      const availableProduct = products.find((product) => product.id === action.payload);
    
      if (item && availableProduct && item.amount + 1 <= availableProduct.amount) {
        item.amount++;
      }
    },
    decrementAmount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
    
      if (item) {
        const availableProduct = products.find((product) => product.id === action.payload);
        if (availableProduct && item.amount - 1 >= 1) {
          item.amount--;
        }
      }
    },
    reset: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  incrementAmount,
  decrementAmount,
  reset,
} = cartSlice.actions;

export default cartSlice.reducer;
