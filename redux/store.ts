import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import CounterReducer from './features/counter/counterSlice';
import ToggleReducer from './features/toggler/togglerSlice';
import CartReducer from './features/cart/cartSlice';


const Store = configureStore({
 reducer: {
    CounterReducer,
    ToggleReducer,
    CartReducer,
     // Add more reducers as needed
     },
 });
export default Store

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch