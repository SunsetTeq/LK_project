import { baseApi } from '@api/base/baseApi';
import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '@slices/authSlice';
import { cartSlice } from '@pages/Catalog/model/cartSlice';
import { assignmentsSlice } from '@pages/Assignments/model/assignmentsSlice';

export const AppReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [assignmentsSlice.name]: assignmentsSlice.reducer,
});

export type AppReducerType = ReturnType<typeof AppReducer>;
