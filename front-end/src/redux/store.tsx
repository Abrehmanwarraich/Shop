// src/redux/store.tsx
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './productSlice-reducer';
import cartReducer from './addtocart-reducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
