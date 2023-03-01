import { createSlice } from '@reduxjs/toolkit';
import { login as loginUser } from '../../api/auth';
import { showAlert } from '../../utils/alert';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: '',
  },

  reducers: {
    login: async (state, { payload }) => {
      try {
        const res = await loginUser(payload);
        console.log(res);
      } catch (e) {
        showAlert(e);
      }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
