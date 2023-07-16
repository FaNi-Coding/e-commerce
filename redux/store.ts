import { configureStore } from '@reduxjs/toolkit';

// Import your reducers
import CounterReducer from './features/counter/counterSlice';

const Store = configureStore({
 reducer: {
    CounterReducer,
     // Add more reducers as needed
     },
 });
export default Store

export type RootState = ReturnType<typeof Store.getState>

export type AppDispatch = typeof Store.dispatch