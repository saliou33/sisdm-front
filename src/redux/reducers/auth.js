import { createSlice } from '@reduxjs/toolkit';
import { login as loginUser } from '../../api/auth';
import { showAlert } from '../../utils/alert';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: {},
  },

  reducers: {
    login: async (state, { payload }) => {
      try {
        const response = await loginUser(payload);
        console.log(response);
        const { user, status, token } = response.data.data;
        state.user = user;
        state.token = token;

        showAlert('Vous êtes connecté.', status);
      } catch (e) {
        const { message, status } = e.response.data;
        showAlert(message, status);
      }
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
