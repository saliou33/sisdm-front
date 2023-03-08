import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, logged } from '../../api/auth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const isUserLogged = createAsyncThunk(
  'auth/isUserLoggedUser',
  async () => {
    const response = await logged();
    return response.data;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    logged: false,
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.logged = true;
      state.loading = false;
    });

    builder.addCase(isUserLogged.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(isUserLogged.fulfilled, (state, action) => {
      if (action.payload.data.user) {
        state.user = action.payload.data.user;
        state.logged = true;
      } else {
        state.logged = false;
      }

      state.loading = false;
    });
  },
});

export default authSlice.reducer;
