import { createSlice, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    User: userReducer,
  },
});

// Can still subscribe to the store
