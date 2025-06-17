import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStorageFields } from '@constants/localStorage';

interface IAuthSlice {
  token?: string;
  isAuthorized: boolean;
}

const initialState: IAuthSlice = {
  token: localStorage.getItem(localStorageFields.token) || undefined,
  isAuthorized: !!localStorage.getItem(localStorageFields.token),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<{ token: string }>) {
      const { token } = action.payload;

      state.token = token;
      state.isAuthorized = true;
      localStorage.setItem(localStorageFields.token, token);
    },

    logOut(state) {
      state.token = '';
      state.isAuthorized = false;
      localStorage.removeItem(localStorageFields.token);
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
