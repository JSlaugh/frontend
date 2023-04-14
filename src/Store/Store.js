import { createSlice, configureStore } from '@reduxjs/toolkit';

export const User = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    role: '',
    email: '',
  },
  reducers: {
    setUser: (state, userName, role, email) => {
      state.value = userName;
      state.role = role;
      state.email = email;
    },
    logout: (state) => {
      state.value = '';
      state.role = '';
      state.email = '';
    },
  },
});
export const selectUser = (state) => state.User;
export const { setUser, logout } = User.actions;
export default configureStore({
  reducer: User.reducer,
});

// Can still subscribe to the store
