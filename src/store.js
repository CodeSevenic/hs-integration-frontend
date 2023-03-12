import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import cartReducer from './features/cart/cartSlice';
import modalSlice from './features/cart/modal/modalSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartReducer,
    modal: modalSlice,
  },
});
