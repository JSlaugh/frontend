import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    setUser: (state, userInfoArray) => {
      console.log(userInfoArray);
      state.push(userInfoArray.payload[0]); //role
      state.push(userInfoArray.payload[1]); //Name
      state.push(userInfoArray.payload[2]); //Email
      console.log(selectUser);
    },
    logout: (state) => {
      state.pop();
      state.pop();
      state.pop();
    },
  },
});
export const { setUser, logout } = userSlice.actions;
export const selectUser = (state) => state.User;
export default userSlice.reducer;
