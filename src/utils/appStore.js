import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Reducers of every slice created are configured/defined here.

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
