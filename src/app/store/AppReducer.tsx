import { baseApi } from '@api/base/baseApi';
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@slices/authSlice';
import { cartSlice } from '@pages/Catalog/model/cartSlice';

export const AppReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

export type AppReducerType = ReturnType<typeof AppReducer>;
